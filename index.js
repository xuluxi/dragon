require('./gulpfile.js');
let gulp = require('gulp');

gulp.task('app-run', ['default'], function() {
  require('./server/app.js');
})

gulp.start('app-run');
