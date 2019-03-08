const eslint = require('gulp-eslint');
const gulp = require('gulp');
const less = require('gulp-less');
const prettier = require('gulp-prettier');
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

// prettier
gulp.task('prettier', ['_prettier-ts', '_prettier-less', '_prettier-html']);
gulp.task('_prettier-ts', () => {
  return gulp
    .src(['*.ts', 'js/*.ts'], {base: '.'})
    .pipe(
      prettier({
        parser: 'typescript',
        arrowParens: 'always',
        bracketSpacing: false,
        insertPragma: false,
        printWidth: 300,
        proseWrap: 'preserve',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      })
    )
    .pipe(gulp.dest('.'));
});
gulp.task('_prettier-less', () => {
  return gulp
    .src(['css/*.less'], {base: '.'})
    .pipe(
      prettier({
        parser: 'less',
        printWidth: 300,
        proseWrap: 'preserve',
        tabWidth: 4,
        useTabs: false,
      })
    )
    .pipe(gulp.dest('.'));
});
gulp.task('_prettier-html', () => {
  return gulp
    .src(['template/*.html'], {base: '.'})
    .pipe(
      prettier({
        parser: 'html',
        printWidth: 300,
        proseWrap: 'preserve',
        tabWidth: 2,
        useTabs: false,
      })
    )
    .pipe(gulp.dest('.'));
});
