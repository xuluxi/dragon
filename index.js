require('./gulpfile.js');
let gulp = require('gulp');

gulp.task('app-run', ['default'], function() {
  require('./server/app.js');
console.log(23)
})

gulp.start('app-run');
