import * as vfs from 'vinyl-fs';

import Config from '../../config';
const vfsOptions = Config.getPluginConfig('vinyl-fs');

/**
 * Executes the build process, generating the manifest file using `angular2-service-worker`.
 */
export = () => {
  return require('angular2-service-worker')
    .gulpGenManifest({
      group: [{
        name: 'css',
	sources: vfs.src(`${Config.APP_DEST}/**/*.css`, vfsOptions)
      }, {
        name: 'js',
	sources: vfs.src(`${Config.APP_DEST}/**/*.js`, vfsOptions)
      }]
    })
    .pipe(vfs.dest(Config.APP_DEST));
};
