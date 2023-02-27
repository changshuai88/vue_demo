let fs = require('fs');
let multer = require('multer');
var express = require('express');
var router = express.Router();
var User = require('../controllers/UserController');
const dbconfig = require('../util/dbconfig');
//定义上传文件路径uploads,上传单个文件single，上传的文件名为file的文件
let upload = multer({dest:'../public/uploads/'}).single('file')

/* GET users listing. */
router.post('/sendCode', User.sendCode);
router.post('/codePhoneLogin', User.codePhoneLogin);
router.post('/sendCoreCode', User.sendCoreCode);
router.post('/login', User.login);
router.post('/editUserInfo',User.editUserInfo);
router.post('/setPassword',User.setPassword);
router.post('/bindEmail',User.bindEmail);
//上传文件路由 upload 为上面定义的，作为路由参数。
router.post('/editUserImg',upload,User.editUserImg)

router.post('/logout',User.logout);

module.exports = router;
