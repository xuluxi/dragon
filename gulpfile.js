let gulp = require('gulp');
let path = require('path');
let shelljs = require('shelljs');
let sass = require('gulp-sass');
let webpack2 = require('webpack');
let babel = require('gulp-babel');

gulp.task('clean', () => {
 // shelljs.rm('-r', path.join(__dirname, 'static/page/home/lib'));
//  shelljs.mkdir('static/page/home/lib');
  //gulp.src('client/page/home/main.js').pipe(gulp.dest('static'));
});
// 启动webpack命令，打包静态文件
gulp.task('webpack', () => {
  shelljs.exec(path.join(__dirname, 'node_modules/.bin/webpack'));
});
// 编译样式目录中的scss文件
gulp.task('sass', () => {
  gulp.src('client/page/home/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('client/page/home/lib'));
});
// 使用babel编译es6文件
gulp.task('babel', () => {
  gulp.src("client/page/home/dist/*.js")
  .pipe(babel())
  .pipe(gulp.dest("client/page/home/lib"))
});

// 监听样式文件的变化
let styleWatcher = gulp.watch('client/page/home/main.scss', ['sass']);
styleWatcher.on('change', () => {
  console.log('样式变化');
})

// 监听js文件的变化
let jsWatcher = gulp.watch('client/page/home/*.js', ['webpack', 'babel']);
jsWatcher.on('change', () => {
  console.log('js文件变化')
})

gulp.watch('server/*.js', (e) => {
  console.log(e)
});

gulp.task('default', ['clean', 'sass', 'webpack', 'babel'], () => {
  console.log('finish run gulp')
});
