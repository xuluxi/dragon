let gulp = require('gulp');
let path = require('path');
let shelljs = require('shelljs');
let sass = require('gulp-sass');
let webpack2 = require('webpack');

gulp.task('clean', () => {
  shelljs.rm('-r', path.join(__dirname, 'static/page/home/lib'));
  shelljs.mkdir('static/page/home/lib');
  //gulp.src('client/page/home/main.js').pipe(gulp.dest('static'));
  gulp.watch('server/*.js', (e) => {
    console.log(e)
  })
});

gulp.task('webpack', () => {
  shelljs.exec(path.join(__dirname, 'node_modules/.bin/webpack'));
});

gulp.task('sass', () => {
  gulp.src('client/page/home/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('client/page/home/lib'));
});

gulp.task('babel', () => {
  shelljs.exec('npm run build');
});

gulp.watch('client/page/home/main.scss', ['sass'])

gulp.task('default', ['clean', 'sass', 'webpack', 'babel'], () => {
  console.log('finish run gulp')
});
