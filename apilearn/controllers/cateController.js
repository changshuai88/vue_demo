var dbConfig = require('../util/dbconfig');
//获取分类
getCate=(req,res)=>{
    let sql="select * from cate";
    let sqlArr=[];
    let callBack = (err,data)=>{
      if (err) {
        console.log('连接出错了');
      }else{
        res.send({
          'list':data
        })
      }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack);
}
//获取指定分类的文章列表
getPostCate=(req,res)=>{
  let {id}=req.query;
  let sql = 'select * from post where cate_id=?'
  let sqlArr = [id];
  let callBack = (err,data)=>{
    if (err) {
      console.log('连接出错了');
    }else{
      res.send({
        'list':data
      })
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack);
  
} 
module.exports={
    getCate,
    getPostCate
}