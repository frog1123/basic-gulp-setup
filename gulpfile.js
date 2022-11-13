const gulp = require('gulp');
const minifyJs = require('gulp-minify');
const minifyCss = require('gulp-clean-css');
const minifyHtml = require('gulp-htmlmin');
const babel = require('gulp-babel');

gulp.task('buildhtml', async () => {
  gulp
    .src(['src/*.html'])
    .pipe(minifyHtml({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('buildjs', async () => {
  gulp
    .src(['src/*.js'])
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(minifyJs({ noSource: true, ext: { min: '.js' } }))
    .pipe(gulp.dest('dist'));
});

gulp.task('buildcss', async () => {
  gulp
    .src(['src/*.css'])
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
});
