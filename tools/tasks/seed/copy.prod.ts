import * as vfs from 'vinyl-fs';
import { join } from 'path';

import Config from '../../config';
const vfsOptions = Config.getPluginConfig('vinyl-fs');

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return vfs.src([
      join(Config.APP_SRC, '**/*.ts'),
      join(Config.APP_SRC, '**/*.html'),
      join(Config.APP_SRC, '**/*.css'),
      join(Config.APP_SRC, '**/*.json'),
      join(Config.APP_SRC, '*.json'),
      '!' + join(Config.APP_SRC, '**/*.spec.ts'),
      '!' + join(Config.APP_SRC, '**/*.e2e-spec.ts')
    ], vfsOptions)
    .pipe(vfs.dest(Config.TMP_DIR));
};
