var dbconfig = require('../util/dbconfig')
//引入阿里大鱼
const Core =require('@alicloud/pop-core')
//引入配置项
const config = require('../util/aliconfig')
//配置阿里大鱼
let client = new Core(config.alicloud)
let requestOption ={
    method:'POST',
    formatParams: false,
}

// 随机生成四位数
function rand(min,max){
    return Math.floor(Math.random()*(max-min)) +min
}
// console.log(Math.floor(Math.random()*10000))
// console.log(rand(10000,99999))
// 手机号和验证码缓存
var validatePhoneCode =[];

// 判断该手机号是否发送过验证码
let sendCodeP = (phone)=>{
     for(var item of validatePhoneCode){
        if(phone == item.phone){
            return true;
        }
     }
     return false;
}

// 判断手机号和验证码是否都正确
let findCodeAndPhone=(phone,code)=>{
    for(let item of validatePhoneCode){
        if(phone==item.phone&&code==item.code){
            return 'login';
        }
    }
    return 'error';
}

//验证码登录是否是第一次登录
let phoneLoginBind = async(phone)=>{
    let sql = 'select * from user where username=? or phone=?';
    let sqlArr = [phone,phone]
    let res = await dbconfig.sySqlConnect(sql,sqlArr);
    if (res.length) {
        res[0].userinfo= await getUserInfo(res[0].id);
        return res
    }else{
        //用户第一次注册，绑定表
        let res = await regUser(phone);
        //获取用户详情
        res[0].userinfo= await getUserInfo(res[0].id);

        return res;
        //用户注册
       
    }
}



//用户注册方法
let regUser = async(phone)=>{
    //检测用户是否是第一次注册
    let userpic = 'https://i1.hdslb.com/bfs/face/b83623525f9f2ef99e1f7350fbd268e433716b7a.jpg@96w_96h_1c_1s.webp0';

    let sql = 'insert into user(username,userpic,phone,create_time) value(?,?,?,?)';
    let sqlArr =[phone,userpic,phone,(new Date())];
    let res = await dbconfig.sySqlConnect(sql,sqlArr);
    if (res.affectedRows == 1) {
        //执行成功获取用户信息
        //获取用户信息的方法
        let user = await getUser(phone);
        //创建用户副表
        let userinfo = await createUserInfo(user[0].id);
        if (userinfo.affectedRows ==1) {
            return user
        }else{
            return false
        }
    }else{
        return false;
    }
}

//获取用户信息
let getUser = (username)=>{
    let sql = 'select * from user where id=? or phone=? or username =?';
    let sqlArr =[username,username,username];
    return dbconfig.sySqlConnect(sql,sqlArr);
}

//创建副表
let createUserInfo = (user_id)=>{
    let sql = 'insert into userinfo(user_id,age,sex,job) values(?,?,?,?)';
    let sqlArr=[user_id,18,2,'i do not know']
    return dbconfig.sySqlConnect(sql,sqlArr);
}

//获取注册的用户详情
let getUserInfo = (user_id)=>{
    let sql = 'select age,sex,job,path,birthday from userinfo where user_id =?';
    let sqlArr=[user_id];
    return dbconfig.sySqlConnect(sql,sqlArr);
}

//查看用户详情
let findUserInfo = async (user_id)=>{
    let sql = 'select * from userinfo where user_id=?';
    let sqlArr =[user_id];
    let res = await dbconfig.sySqlConnect(sql,sqlArr);
    // res.length?true:false;
    if (res.length) {
        return true
    }
    return false;
}

//修改用户信息详情
let setUserInfo = async(user_id,age,sex,job,path,birthday)=>{
    if (findUserInfo(user_id)) {
        let sql ='update userinfo set age=?,sex=?,job=?,path=?,birthday=? where user_id=?';
        let sqlArr=[age,sex,job,path,birthday,user_id];
        let res = await dbconfig.sySqlConnect(sql,sqlArr);
        if (res.affectedRows==1) {
            let user = await getUser(user_id);
            let userinfo = await getUserInfo(user_id);
            user[0].userinfo = userinfo[0];
            return user;
        }else{
            return false;
        }
    }else{
        let sql = 'insert into userinfo (user_id,age,sex,job,path,birthday) values(?,?,?,?,?,?)';
        let sqlArr=[user_id,age,sex,job,path,birthday];
        let res = await dbconfig.sySqlConnect(sql,sqlArr);
        if (res.affectedRows==1) {
            let user = await getUser(user_id);
            let userinfo = await getUserInfo(user_id);
            user[0].userinfo = userinfo[0];
            return user;
        }else{
            return false;
        }
    }
}

//修改用户名称
let setUserName = async(user_id,username)=>{
    let sql = 'update user set username=? where id=?';
    let sqlArr=[user_id,username];
    let res= await dbconfig.sySqlConnect(sql,sqlArr);
    if (res.affectedRows==1) {
        return true;
    }else{
        return false;
    }
}

//检查用户密码
let checkUserPwd = async(user_id)=>{
    let sql = 'select password from user where id=?';
    let sqlArr=[user_id];
    let res = await dbconfig.sySqlConnect(sql,sqlArr);
    console.log(res);
    if(res.length){
        return res[0].password;
    }else{
        return 0;
    }
}

//真实验证码--大鱼接口
let sendCoreCode=(req,res)=>{
   let phone = req.query.phone;
   let code=rand(1000,9999) ;
   //params 参数注意和大鱼中设置的保持一致
   //PhoneNumbers，TemplateParam这两个参数可以自定义
   var params = {
    "SignName": "平地机配件",
    "TemplateCode": "SMS_270955515",
    "PhoneNumbers": phone,
    "TemplateParam":  JSON.stringify({"code":code})
    };
    // 调用大鱼实例
    client.request('SendSms',params,requestOption).then((result)=>{
        console.log(result);
        if (result.Code =='OK') {
            res.send({
                "code":200,
                "msg":"发送成功"
            });
            validatePhoneCode.push({
                'phone':phone,
                'code':code
            });
            console.log(code);
        }else{
            res.send({
                "code":400,
                "msg":"发送失败"
            })
        }
    })

}


//模拟验证码发送接口
let sendCode=(req,res)=>{
    // 导入插件body-parser前
    // let phone = req.body.user_phone;
    // 导入插件body-parser后
    let phone = req.query.phone;
    // 验证手机号码
    if(sendCodeP(phone)){
        res.send({
            'code':400,
            'msg':'已经发送过验证码'
        })
    };
    let code = rand(1000,9999);
    validatePhoneCode.push({
        'phone':phone,
        'code':code
    });
    console.log(validatePhoneCode);
    res.send({
        'code':200,
        'msg':'发送成功'
    });
    console.log(code);
}

//验证码登录接口
let codePhoneLogin = async (req,res)=>{
    let {phone,code}=req.query;
    // 该手机号码是否发送过验证码
    if (sendCodeP(phone)) {
        //验证码和手机号是否匹配
        let status = findCodeAndPhone(phone,code);
        if(status == 'login'){
            //登录成功

            //登录成功后的操作
            let user = await phoneLoginBind(phone);
            res.send({
                'code':200,
                'msg':'登录成功',
                'data':user[0]
            })
        }else if(status == 'error'){
            res.send({
                'code':400,
                'msg':'登录失败'
            })
        }
    }else{
        res.send({
            'code':400,
            'msg':'未发验证码'
        })
    }

}

//用户名或者手机号登录
let login = (req,res)=>{
    let username = req.query.username,
    password =req.query.password;
    //定义手机号正则规则
    let phone =/^1[3456789]\d{9}$/;
    //定义邮箱正则规则
    let email = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+.([a-zA-Z]{2,4})$/;
    //test()为js正则方法，检测username是否符合正则phone的规则，如果符合返回true
    if(phone.test(username)){
        let sql = 'select * from user where phone=? and password =? or username =? and password=?';
        let sqlArr=[username,password,username,password];
        let callBack = async (err,data)=>{
            if(err){
                console.log(err)
                res.send({
                    'code':400,
                    'msg':"出错了"
                })
            }else if(data ==""){
                res.send({
                    'code':400,
                    'msg':"用户名或者密码错误",
                    'data':[]
                })
            }else{
                let user_id =data[0].id;
                //调用异步函数，必须在据他最近的函数处加async。
                let result = await getUserInfo(user_id);
                data[0].userinfo = result[0];
                res.send({
                    'code':200,
                    'msg':"登录成功",
                    'data':data[0]
                })

            }
        }
        dbconfig.sySqlConnect(sql,sqlArr,callBack);
    }else if(email.test(username)){
        let sql = 'select * from user where email =? and password =?';
        let sqlArr=[username,password];
        let callBack=async (err,data)=>{
            if(err){
                console.log(err)
                res.send({
                    'code':400,
                    'msg':"出错了"
                })
            }else if(data ==""){
                res.send({
                    'code':400,
                    'msg':"邮箱或者密码错误",
                    'data':[]
                })
            }else{
                let user_id =data[0].id;
                //调用异步函数，必须在据他最近的函数处加async。
                let result = await getUserInfo(user_id);
                data[0].userinfo = result[0];
                res.send({
                    'code':200,
                    'msg':"登录成功",
                    'data':data[0]
                })

            }
        }
        dbconfig.sySqlConnect(sql,sqlArr,callBack);
    }else{
        let sql= 'select * from user where username=? and password=?';
        let sqlArr =[username,password];
        let callBack=async (err,data)=>{
            if(err){
                console.log(err)
                res.send({
                    'code':400,
                    'msg':"出错了"
                })
            }else if(data ==""){
                res.send({
                    'code':400,
                    'msg':"邮箱或者手机号密码错误",
                    'data':[]
                })
            }else{
                let user_id =data[0].id;
                //调用异步函数，必须在据他最近的函数处加async。
                let result = await getUserInfo(user_id);
                data[0].userinfo = result[0];
                res.send({
                    'code':200,
                    'msg':"登录成功",
                    'data':data[0]
                })
            }
        }
        dbconfig.sySqlConnect(sql,sqlArr,callBack);
    }
}

// 修改资料
let editUserInfo = async (req,res)=>{
    let {user_id,username,age,sex,job,path,birthday} = req.query;
    let result = await setUserName(user_id,username);
    if (result) {
        let ress = await setUserInfo(user_id,age,sex,job,path,birthday);
        if (ress.length) {
            res.send({
                'code':200,
                'data':ress[0]
            })
        }else{
            res.send({
                'code':400,
                'msg':"修改失败"
            })
        }
    }else{
        res.send({
            'code':400,
            'msg':"修改失败"
        })
    }
}

//修改用户密码
let setPassword = async (req,res)=>{
    let {user_id,oldpassword,newpassword} = req.query;
    //检查用户密码方法
    let userPwd = await checkUserPwd(user_id);
    console.log(userPwd);
    if (userPwd) {
        if (oldpassword ==userPwd) {
            let sql ='update user set password=? where id=?';
            let sqlArr=[newpassword,user_id];
            let result = await dbconfig.sySqlConnect(sql,sqlArr); 
            if (result.affectedRows ==1) {
                res.send({
                    'code':200,
                    'msg':"修改密码成功"
                })
            }else{
                res.send({
                    'code':400,
                    'msg':"修改密码失败"
                })
            }
        }else{
            res.send({
                'code':200,
                'msg':'新旧密码不一致'
            })
        }
    }else{
        let sql ='update user set password=? where id=?';
        let sqlArr=[newpassword,user_id];
        let result = await dbconfig.sySqlConnect(sql,sqlArr); 
        if (result.affectedRows ==1) {
            res.send({
                'code':200,
                'msg':"修改密码成功"
            })
        }else{
            res.send({
                'code':400,
                'msg':"修改密码失败"
            })
        }
    }
}

//绑定用户邮箱接口
let bindEmail = async(req,res)=>{
    let {user_id,email}= req.query;
    let sql = 'update user set email=? where id=?';
    let sqlArr =[email,user_id];
    let result = await dbconfig.sySqlConnect(sql,sqlArr);
    console.log(result);
    if (result.affectedRows==1) {
        res.send({
            'code':200,
            'msg':'绑定邮箱成功'
        })
    }else{
        res.send({
            'code':400,
            'msg':'绑定邮箱失败'
        })
    }
}

//修改头像
let editUserImg=(req,res)=>{
    if(req.file.length ===0){
        res.render('error',{message:'上传文件不能为空'});
        return
    }else{
        let file = req.file;
        let fileInfo = {};
        console.log(file);
        fs.renameSync('../public/uploads/'+file.filename,'../public/uploads/'+file.originalname);
        res.set({
            'content-type':'application/json;charset=utf-8'
        });
        let {user_id}=req.query;
        let imgUrl = 'http://localhost:3000/uploads/'+file.originalname;
        let sql = 'update user set suerpic=?where id=?';
        let sqlArr= [imgUrl,user_id];
        dbconfig.sqlConnect(sql,sqlArr,(err,data)=>{
            if (err) {
                console.log(err);
                throw '出错了'
            }else{
                if(data.affectedRows==1){
                    res.send({
                        'code':200,
                        'msg':'修改成功',
                        'url':imgUrl
                    })
                }else{
                    res.send({
                        'code':400,
                        'msg':'修改失败',
                       
                    })
                }
            }
        });


    }
}

//退出登录
let logout = (req,res)=>{
    res.send({
        'code':200,
        'msg':'退出登录'
    })
}

module.exports={
    sendCode,
    codePhoneLogin,
    sendCoreCode,
    login,
    editUserInfo,
    setPassword,
    bindEmail,
    editUserImg,
    logout
}