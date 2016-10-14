import * as gulp from 'gulp';
import { join } from 'path';
import * as vfs from 'vinyl-fs';
const vfsOptions = <any>{ strict: false, allowEmpty: true, follow: true, followSymlinks: true };

import { AssetsTask } from '../assets_task';
import Config from '../../config';

/**
 * Executes the build process, copying the assets located in `src/client` over to the appropriate
 * `dist/dev` directory.
 */
export =
  class BuildAssetsTask extends AssetsTask {
    run() {
      let paths: string[] = [
	join(Config.APP_SRC, '**'),
	'!' + join(Config.APP_SRC, '**', '*.ts'),
	'!' + join(Config.APP_SRC, '**', '*.scss'),
	'!' + join(Config.APP_SRC, '**', '*.sass')
	    ].concat(Config.TEMP_FILES.map((p) => { return '!' + p; }));

      return vfs.src(paths, vfsOptions)
	.pipe(vfs.dest(Config.APP_DEST));
    }
  };

