
import * as vfs from 'vinyl-fs';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import * as slash from 'slash';

import Config from '../../config';
import { templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();
const vfsOptions = Config.getPluginConfig('vinyl-fs');

/**
 * Executes the build process, injecting the shims and libs into the `index.hml` for the development environment.
 */
export = () => {
  return vfs.src(slash(join(Config.APP_SRC, 'index.html')), vfsOptions)
    .pipe(inject('shims'))
    .pipe(inject('libs'))
    .pipe(inject())
    .pipe(plugins.template(templateLocals()))
    .pipe(vfs.dest(Config.APP_DEST));
};

/**
 * Injects the file with the given name.
 * @param {string} name - The file to be injected.
 */
function inject(name?: string) {
  vfsOptions.read = false;
  return plugins.inject(vfs.src(getInjectablesDependenciesRef(name), vfsOptions), {
    name,
    transform: transformPath()
  });
}

/**
 * Returns the injectable dependency, mapping its filename to its path.
 * @param {string} name - The dependency to be mapped.
 */
function getInjectablesDependenciesRef(name?: string) {
  return Config.DEPENDENCIES
    .filter(dep => dep['inject'] && dep['inject'] === (name || true))
    .map(mapPath);
}

/**
 * Maps the path of the given dependency to its path according to the applications environment.
 * @param {any} dep - The dependency to be mapped.
 */
function mapPath(dep: any) {
  let envPath = dep.src;
  if (envPath.startsWith(Config.APP_SRC) && !envPath.endsWith('.scss')) {
    envPath = slash(join(Config.APP_DEST, envPath.replace(Config.APP_SRC, '')));
  } else if (envPath.startsWith(Config.APP_SRC) && envPath.endsWith('.scss')) {
    envPath = envPath.replace(Config.ASSETS_SRC, Config.CSS_DEST).replace('.scss', '.css');
  }
  return envPath;
}

/**
 * Transform the path of a dependency to its location within the `dist` directory according to the applications
 * environment.
 */
function transformPath() {
  return function (filepath: string) {
    if (filepath.startsWith(`/${Config.APP_DEST}`)) {
      filepath = filepath.replace(`/${Config.APP_DEST}`, '');
    }
    arguments[0] = slash(join(Config.APP_BASE, filepath)) + `?${Date.now()}`;
    return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
  };
}
