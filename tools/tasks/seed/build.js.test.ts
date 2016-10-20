import * as vfs from 'vinyl-fs';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import Config from '../../config';
import { makeTsProject } from '../../utils';

const plugins = <any>gulpLoadPlugins();
const vfsOptions = Config.getPluginConfig('vinyl-fs');

/**
 * Executes the build process, transpiling the TypeScript files (excluding the spec and e2e-spec files) for the test
 * environment.
 */
export = () => {
  let tsProject = makeTsProject();
  let src = [
    Config.TOOLS_DIR + '/manual_typings/**/*.d.ts',
    join(Config.APP_SRC, '**/*.spec.ts')
  ];
  let result = vfs.src(src, vfsOptions)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(tsProject());

  return result.js
    .pipe(plugins.sourcemaps.write())
    .pipe(vfs.dest(Config.APP_DEST));
};
