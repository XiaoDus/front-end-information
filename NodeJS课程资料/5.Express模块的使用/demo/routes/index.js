var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get', function(req, res, next) {
  console.log(req.url,req.method,req.query)
  res.send({'code':200,'msg':'成功访问get,'+req.query.name});
});

router.post('/login', function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Headers","X-Requestd-With");
	res.header("Access-Control-Allow-Headers","Content-Type");
  console.log(req.url,req.method,req.body)
  // let account = mysql('select id from table_user where username= '+ req.body.username +'and passwowrd='+req.body.password)
  if(req.body.username == 'admin' && req.body.password == '123'){
	  res.send({'code':200,'msg':'登陆成功,'});
  }else{
	  res.send({'code':400,'msg':'登陆失败，用户名或密码错误'});
  }
});

module.exports = router;
