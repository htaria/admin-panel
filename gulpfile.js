const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
// const pipeline = require('readable-stream').pipeline;
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const concat = require('gulp-concat');


// print Msg
gulp.task("msg", async function () {
    return console.log('Gulps started!!!');
});
// Add files to dist
gulp.task('copy-html', async function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//Minify images 
gulp.task('minify-image', async function () {
    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'));
});

//Minify Js Files
gulp.task('compress-js', async function () {
    gulp.src('src/assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});

// Compile Sass Files To Css
gulp.task('compile-my-sass', async function () {
    gulp.src('src/assets/style/SASS/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/style/'));
});

gulp.task('compile-my-sass-min', async function () {
    gulp.src('src/assets/style/SASS/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/assets/style'));
});

// Compile Bootstrap Sass Files To Css
gulp.task('compile-bootstrap', async function () {
    gulp.src('src/assets/style/bootstrap/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/style/bootstrap'));
});

gulp.task('compile-bootstrap-min', async function () {
    gulp.src('src/assets/style/bootstrap/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bootstrap.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/assets/style/bootstrap/min'));
});

// Compile Plugins Files
gulp.task('compile-Plugins-js', async function () {
    gulp.src('src/assets/js/Plugins/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js/Plugins'));
});

gulp.task('compile-Plugins-css', async function () {
    return gulp.src('src/assets/style/Plugins/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/assets/style/Plugins'));
});



// Gulp watch task 4.*
gulp.task('watch',async function() {
    gulp.watch('src/*.html',gulp.series('copy-html'));
    gulp.watch('src/assets/img/*',gulp.series('minify-image'));
    gulp.watch('src/assets/js/*.js',gulp.series('compress-js'));
    gulp.watch('src/assets/style/SASS/*.scss',gulp.series('compile-my-sass'));
    gulp.watch('src/assets/style/SASS/*.scss',gulp.series('compile-my-sass-min'));
    gulp.watch('src/assets/style/bootstrap/scss/*.scss',gulp.series('compile-bootstrap'));
    gulp.watch('src/assets/style/bootstrap/scss/*.scss',gulp.series('compile-bootstrap-min'));
    gulp.watch('src/assets/js/Plugins/*.js',gulp.series('compile-Plugins-js'));
    gulp.watch('src/assets/style/Plugins/*.css',gulp.series('compile-Plugins-css'));
});

//-------------
gulp.task('default',gulp.parallel('msg','copy-html','minify-image','compress-js','compile-my-sass','compile-my-sass-min','compile-bootstrap','compile-bootstrap-min','compile-Plugins-js','compile-Plugins-css','watch'));
// gulp.task('default',gulp.parallel('msg','watch','minify-image'));
