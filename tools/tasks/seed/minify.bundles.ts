import * as vfs from 'vinyl-fs';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import { join } from 'path';
import * as slash from 'slash';

import Config from '../../config';
const vfsOptions = Config.getPluginConfig('vinyl-fs');

const plugins = <any>gulpLoadPlugins();

const getTask = (target: string, destDir: string) => {
  return vfs.src(slash(join(destDir, target)), vfsOptions)
    .pipe(plugins.uglify({
      compress: true,
      mangle: true
    }))
    .pipe(vfs.dest(destDir));
};

export = () => {
  return merge(
    getTask(Config.JS_PROD_APP_BUNDLE, Config.JS_DEST),
    getTask(Config.JS_PROD_SHIMS_BUNDLE, Config.JS_DEST)
  );
};
