import gulp from 'gulp'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import del from 'del'

const paths = {
  scripts: {
    src: 'src/*.js',
    dest: 'dist/'
  }
}

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del(['dist']);

/*
 * You can also declare named functions and export them as tasks
 */
export function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dest))
    // .pipe(uglify())
    // .pipe(concat('miniVue.min.js'))
    // .pipe(gulp.dest(paths.scripts.dest))
}

/*
 * watch files
 */
export function watchFiles() {
  gulp.watch(paths.scripts.src, scripts);
}

/*
 * for example to set task names that would otherwise be invalid
 */
const build = gulp.series(clean, scripts, watchFiles);
gulp.task('build', build);

/*
 * Export a default task
 */
export default build;
