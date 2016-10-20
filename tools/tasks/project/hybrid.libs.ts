import * as gulp from 'gulp';
import { relative, join } from 'path';
import Config from '../../config';
var newer = require('gulp-newer');

export = () => {
  let src = [
    'node_modules/**/*'
  ];

  src.push(...Config.NPM_DEPENDENCIES.map(x => relative(Config.PROJECT_ROOT, x.src)));

  return gulp.src(src, { base: 'node_modules' })
    .pipe(newer({
      dest: join(Config.APP_DEST + '/node_modules'),
      map: function(path: String) { return path.replace('.ts', '.js').replace('.sccs', '.css'); }
    }))
    .pipe(gulp.dest(join(Config.APP_DEST + '/node_modules')));
};
