import * as vfs from 'vinyl-fs';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, normalize } from 'path';
import * as slash from 'slash';

import Config from '../../config';
import { templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();
const vfsOptions = Config.getPluginConfig('vinyl-fs');

/**
 * Executes the build process, injecting the JavaScript and CSS dependencies into the `index.html` for the production
 * environment.
 */
export = () => {
  return vfs.src(slash(join(Config.APP_SRC, 'index.html')), vfsOptions)
    .pipe(injectJs())
    .pipe(injectCss())
    .pipe(plugins.template(templateLocals()))
    .pipe(vfs.dest(Config.APP_DEST));
};

/**
 * Injects the given file array and transforms the path of the files.
 * @param {Array<string>} files - The files to be injected.
 */
function inject(...files: Array<string>) {
    vfsOptions.read = false;
    return plugins.inject(vfs.src(files, vfsOptions), {
        files,
        transform: transformPath()
    });
}

/**
 * Injects the bundled JavaScript shims and application bundles for the production environment.
 */
function injectJs() {
  return inject(slash(join(Config.JS_DEST, Config.JS_PROD_SHIMS_BUNDLE)), slash(join(Config.JS_DEST, Config.JS_PROD_APP_BUNDLE)));
}

/**
 * Injects the bundled CSS files for the production environment.
 */
function injectCss() {
  return inject(slash(join(Config.CSS_DEST, Config.CSS_PROD_BUNDLE)));
}

/**
 * Transform the path of a dependency to its location within the `dist` directory according to the applications
 * environment.
 */
function transformPath() {
  return function(filepath: string) {
    let configAppNormalized = normalize(Config.APP_DEST).replace(/^\//,'').replace(/^\\/,'');
    let filePathNormalized = normalize(filepath).replace(/^\//,'').replace(/^\\/,'');
    let path = filePathNormalized.replace(configAppNormalized, '').replace(/^\//,'').replace(/^\\/,'');
    arguments[0] = Config.APP_BASE + slash(path) + `?${Date.now()}`;
    return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
  };
}
