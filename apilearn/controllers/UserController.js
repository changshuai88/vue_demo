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
        return res
    }else{
        //用户第一次注册，绑定表
        //用户注册
        //获取用户详情
    }
}

//用户注册方法
let regUser = ()=>{

}

//真实验证码--大鱼接口
sendCoreCode=(req,res)=>{
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
sendCode=(req,res)=>{
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
codePhoneLogin = (req,res)=>{
    let {phone,code}=req.query;
    // 该手机号码是否发送过验证码
    if (sendCodeP(phone)) {
        //验证码和手机号是否匹配
        let status = findCodeAndPhone(phone,code);
        if(status == 'login'){
            //登录成功
            //登录成功后的操作
            res.send({
                'code':200,
                'msg':'登录成功'
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

module.exports={
    sendCode,
    codePhoneLogin,
    sendCoreCode
}