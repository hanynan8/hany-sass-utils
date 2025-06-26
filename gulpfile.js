const { src, dest, watch, series } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')



function buildStyles() {
  return src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError)) 
    .pipe(purgecss({content: ['*.html']}))
    .pipe(dest('css'));
}


function watchTask() {
  watch(
    ['scss/**/*.scss', '*.html', 'blankConstent/**/*.scss'],
    { events: 'all' }, 
    buildStyles
  );
}


exports.build = buildStyles;
exports.default = series(buildStyles, watchTask);