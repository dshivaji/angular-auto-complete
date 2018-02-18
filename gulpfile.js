'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var jsFiles = ['js/**/*.js', '!js/vendor/*'];

gulp.task('lintjs', function () {
    return gulp.src(jsFiles)
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format());
});

gulp.task('documentation', function () {
    return gulp.src('js/angular-auto-complete.js')
        .pipe(plugins.documentation('json', { filename: 'docs.json' }))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
    gulp.watch(jsFiles, ['lintjs']);
});

gulp.task('default', ['lintjs', 'watch']);
