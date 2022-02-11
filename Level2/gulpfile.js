const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

sass.compile = require('sass');

// Tłumaczenie plików .cscc do .css

function style() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

async function watch() {
  // Inicjalizacja browserSync
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
