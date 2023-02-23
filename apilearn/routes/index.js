var express = require('express');
var router = express.Router();
var cate = require('../controllers/cateController');
//引入配置的数据库连接文件
// var dbConfig = require('../util/dbconfig');

/* GET home page. */
router.get('/', cate.getCate);
router.get('/getPostCate',cate.getPostCate)

module.exports = router;
