import * as vfs from 'vinyl-fs';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as util from 'gulp-util';
import { join/*, sep, relative*/ } from 'path';
import * as slash from 'slash';

import Config from '../../config';
import { makeTsProject, templateLocals } from '../../utils';
import { TypeScriptTask } from '../typescript_task';
const vfsOptions = Config.getPluginConfig('vinyl-fs');

const plugins = <any>gulpLoadPlugins();

const jsonSystemConfig = JSON.stringify(Config.SYSTEM_CONFIG_DEV);

let typedBuildCounter = Config.TYPED_COMPILE_INTERVAL; // Always start with the typed build.

/**
 * Executes the build process, transpiling the TypeScript files (except the spec and e2e-spec files) for the development
 * environment.
 */
export =
  class BuildJsDev extends TypeScriptTask {
    run() {
      let tsProject: any;
      let typings = vfs.src([
        Config.TOOLS_DIR + '/manual_typings/**/*.d.ts'
      ], vfsOptions);
      let src = [
        slash(join(Config.APP_SRC, '**/*.ts')),
        '!' + slash(join(Config.APP_SRC, '**/*.spec.ts')),
        '!' + slash(join(Config.APP_SRC, '**/*.e2e-spec.ts')),
        '!' + slash(join(Config.APP_SRC, `**/${Config.NG_FACTORY_FILE}.ts`))
      ];

      let projectFiles = vfs.src(src, vfsOptions);
      let result: any;
      let isFullCompile = true;

      // Only do a typed build every X builds, otherwise do a typeless build to speed things up
      if (typedBuildCounter < Config.TYPED_COMPILE_INTERVAL) {
        isFullCompile = false;
        tsProject = makeTsProject({isolatedModules: true});
        projectFiles = projectFiles.pipe(plugins.cached());
        util.log('Performing typeless TypeScript compile.');
      } else {
        tsProject = makeTsProject();
        projectFiles = merge(typings, projectFiles);
      }

      result = projectFiles
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(tsProject())
        .on('error', () => {
          typedBuildCounter = Config.TYPED_COMPILE_INTERVAL;
        });

      if (isFullCompile) {
        typedBuildCounter = 0;
      } else {
        typedBuildCounter++;
      }

      return result.js
        .pipe(plugins.sourcemaps.write())
        // Use for debugging with Webstorm/IntelliJ
        // https://github.com/mgechev/angular2-seed/issues/1220
        //    .pipe(plugins.sourcemaps.write('.', {
        //      includeContent: false,
        //      sourceRoot: (file: any) =>
        //        relative(file.path, PROJECT_ROOT + '/' + APP_SRC).replace(sep, '/') + '/' + APP_SRC
        //    }))
        .pipe(plugins.template(Object.assign(
          templateLocals(), {
            SYSTEM_CONFIG_DEV: jsonSystemConfig
          }
         )))
        .pipe(vfs.dest(Config.APP_DEST));
      }
  };

