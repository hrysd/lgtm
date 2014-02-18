var gulp   = require('gulp'),
    util   = require('gulp-util'),
    coffee = require('gulp-coffee'),
    exec   = require('gulp-exec');

gulp.task('coffee', function() {
  gulp.src('src/javascripts/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('build/javascripts/'));
});

gulp.task('copy', function() {
  gulp.src('src/images/*')
    .pipe(gulp.dest('build/images/'));

  gulp.src('src/manifest.json')
    .pipe(gulp.dest('build/'));

  gulp.src('bower_components/jquery/dist/jquery.js')
    .pipe(gulp.dest('build/javascripts/'))
});

gulp.task('zip', function() {
  gulp.src('.')
    .pipe(exec('cd build && zip -r ../lgtm .'));
});

gulp.task('default', ['coffee', 'copy']);
gulp.task('release', ['default', 'zip']);
