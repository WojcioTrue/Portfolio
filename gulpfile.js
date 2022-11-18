const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();


function scssTask(){
  return src('src/scss/*.scss', { sourcemaps: true })
      .pipe(sass())
      .pipe(cleanCss())
      .pipe(dest('dist/css/', { sourcemaps: '.' }));
}

function jsTask(){
  return src('src/my_js/*.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist/js/', { sourcemaps: '.' }));
}

function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: "."
    }    
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

function watchTask(){
  watch('./*.html', browsersyncReload);
  watch(['src/scss/*.scss', 'src/my_js/*.js'], series(scssTask, jsTask, browsersyncReload));
}

exports.watch = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
  );