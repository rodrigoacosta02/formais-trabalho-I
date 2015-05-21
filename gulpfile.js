var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('default', ['lint', 'test']);

gulp.task('lint', function() {
  return gulp.src(['src/**/*.js', 'test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    return gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({reporter: 'dot'}));
});

gulp.task('watch', ['lint', 'test'], function() {
  gulp.watch(['src/**/*.js', 'test/**/*.js'], ['lint']);
  gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
});
