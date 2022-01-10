var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var minifyCss = require('gulp-cssnano');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
const hash = require('gulp-hash-filename');

gulp.task('scss', function() {
    //look in the 'sass' folder for any .scss files
    return gulp.src('scss/*.scss')

        //sourcemaps start
        .pipe(sourcemaps.init())
        //process sass to css
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(minifyCss())
        .pipe(rename('style1.min.css'))

        //sourcemaps end
        .pipe(sourcemaps.write({includeContent: false}))

        //output .css file to the 'css' folder
        .pipe(gulp.dest('css'))
});

gulp.task('js', function() {
    //look in the 'sass' folder for any .scss files
    return gulp.src('scss/*.scss')

        //sourcemaps start
        .pipe(sourcemaps.init())
        //process sass to css
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(minifyCss())
        .pipe(rename('style1.min.css'))

        //sourcemaps end
        .pipe(sourcemaps.write({includeContent: false}))

        //output .css file to the 'css' folder
        .pipe(gulp.dest('css'))
});

gulp.task('CSSHash', function () {
    return gulp.src('css/theme.css')
        .pipe(hash({
            "format": "c{hash:8}.{size}{ext}"
        }))
        .pipe(gulp.dest('./'))
});


gulp.task('CSS-bootstrap.min.css', function () {
    return gulp.src('css/theme.css')
        .pipe(hash({
            "format": "cb{hash:8}.{size}{ext}"
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('default', ['scss']);