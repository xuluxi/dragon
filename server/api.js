/**
* 接收从Client端传来的异步请求
**/

let router = require('koa-router')();

router
.get('/abc', function* (next) {
  this.body = 'hello from router!';
  yield next;
})
.get('/def', function* (next) {
  this.body = 'def say s hello';
  yield next;
});

module.exports = router.routes();
