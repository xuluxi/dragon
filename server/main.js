let cp = require('child_process');
let chokidar = require('chokidar');
let path = require('path');

let watcher = chokidar.watch(__dirname);
let appIns = cp.fork(path.join(__dirname, 'app.js'));

watcher.on('ready', () => {
  console.log('watcher ready!!!')
  watcher.on('change', path => {
    console.log('file changed ', path);
    appIns = reload(appIns);
  })
});

function reload(appIns) {
  appIns.kill();
  return cp.fork(path.join(__dirname, 'app.js'));
}
