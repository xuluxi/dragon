/**
* 接收从Client端传来的异步请求
**/

let router = require('koa-router')();

router
.get('/abc', function* (next) {
  this.body = 'hello from router!!!';
  yield next;
})
.get('/def', function* (next) {
  this.body = 'def say s hello';
  yield next;
});

process.on('message', m => {
  console.log('I here ' + m.msg)
  process.send('what I can do for you?')
});

module.exports = router.routes();
