var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    inline = require('gulp-inline'),
    purify = require('gulp-purifycss');

var scssdir = 'src/scss/**/*.scss'

gulp.task('sass', function () {
    gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('listensass', function () {
    gulp.watch(scssdir, ['sass'])
});

gulp.task('uglifyJS', function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('uglifyCSS', function () {
    gulp.src('src/css/*.css')
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('htmlmin', function () {
    gulp.src('src/catalogo.html')
        .pipe(inline())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('imagesmin', function () {
    gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('purifycss', function () {
    gulp.src('src/**/*.css')
        .pipe(purify(['./src/**/*.js', './src/**/*.html']))
        .pipe(gulp.dest('dist/'));
});

