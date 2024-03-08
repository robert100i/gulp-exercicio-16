const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar o SASS
function compilaSass() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
};

// Tarefa para comprimir as imagens
function comprimeImagens() {
  return gulp.src('gulp_img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
};

// Tarefa para comprimir o JavaScript
function comprimeJavaScript() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
};

// Tarefa padrão que executa todas as tarefas
exports.default = function() {
gulp.watch('./src/sass/*.scss', { ignoreInitial: false }, gulp.series (compilaSass)); 
gulp.watch('./src/js/*.js', { ignoreInitial: false }, gulp.series (comprimeJavaScript)); 
gulp.watch('./gulp-img/*', { ignoreInitial: false }, gulp.series (comprimeImagens));
}