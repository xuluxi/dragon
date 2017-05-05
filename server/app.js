let app = require('koa')();
let api = require('./api.js');
let router = require('./router.js');

app.use(router);
app.use(api);

app.listen(3000);


console.log('-------- server is listening on port 3000 ---------');
