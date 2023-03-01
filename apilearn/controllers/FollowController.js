var dbconfig = require('../util/dbconfig');

//检查用户是否已经关注
let checkFollow = async (user_id,follow_id)=>{
    let sql = 'select * from follow where user_id=? and follow_id=?';
    let sqlArr = [user_id,follow_id];
    let result = await dbconfig.sySqlConnect(slq,sqlArr);
    if (result.length) {
        return true;
    }else{
        return false;
    }
}
//关注
let follow = async (req,res)=>{
    let {user_id,follow_id}= req.query;
    //检查用户是否已经关注
    if ( !await checkFollow(user)) {
        if (user_id == follow_id) {
            res.send({
                'code':400,
                'msg':'不能关注自己'
            })

        }else{
            let sql = 'insert into follow(follow_id,user_id,create_time) values(?,?,?)';
            let sqlArr=[follow_id,user_id,(new Date()).valueOf()];
            let result = await dbconfig.sySqlConnect(sql,sqlArr);
            if (result.affectedRows==1) {
                res.send({
                    'code':200,
                    'msg':'关注成功'
                })
            }else{
                res.send({
                    'code':400,
                    'msg':'关注失败'
                })
            }
        }
    }else{
        res.send({
            'code':400,
            'msg':'不能重复关注'
        })
    }
}

module.exports={
    follow,
}