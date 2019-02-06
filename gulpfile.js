const eslint = require('gulp-eslint');
const gulp = require('gulp');
const less = require('gulp-less');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

// tsc
gulp.task('tsc', () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('.'));
});

// lint
gulp.task('lint', () => {
  return gulp.src(['*.ts','js/*.ts'])
    .pipe(eslint({useEslintrc: true, quiet: true}))
    .pipe(eslint.format());
});

// less
gulp.task('less', () => {
  return gulp.src(['css/*.less'], {base: '.'})
    .pipe(less())
    .pipe(gulp.dest('.'));
});

