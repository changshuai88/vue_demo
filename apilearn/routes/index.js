var express = require('express');
var router = express.Router();
//引入配置的数据库连接文件
var dbConfig = require('../util/dbconfig');
console.log(dbConfig);

/* GET home page. */
router.get('/', function(req, res, next) {
  var sql="select * from cate";
  var sqlArr=[];
  var callBack = (err,data)=>{
    if (err) {
      console.log('连接出错了');
    }else{
      res.send({
        'list':data
      })
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack);
  // res.render('index', { title: 'hello' });
});

module.exports = router;
