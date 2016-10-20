import * as vfs from 'vinyl-fs';
import { join } from 'path';
import * as slash from 'slash';

import Config from '../../config';
const vfsOptions = Config.getPluginConfig('vinyl-fs');

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return vfs.src([
      slash(join(Config.APP_SRC, '**/*.ts')),
      slash(join(Config.APP_SRC, '**/*.html')),
      slash(join(Config.APP_SRC, '**/*.css')),
      slash(join(Config.APP_SRC, '**/*.json')),
      slash(join(Config.APP_SRC, '*.json')),
      '!' + slash(join(Config.APP_SRC, '**/*.spec.ts')),
      '!' + slash(join(Config.APP_SRC, '**/*.e2e-spec.ts'))
    ], vfsOptions)
    .pipe(vfs.dest(Config.TMP_DIR));
};
