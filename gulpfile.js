var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var bourbon = require("node-bourbon").includePaths;

console.log(bourbon);
gulp.task('compress', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    gulp.src(['sass/**/*.scss'])
        .pipe(sass({
            includePaths: bourbon
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

gulp.task('default', ['compress'], function() {

});
