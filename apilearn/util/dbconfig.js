const mysql = require('mysql')
module.exports ={
    //数据库配置
    config:{
        host:'localhost',
        port:'3306',
        user:'exapp',
        password:'123456',
        database:'exapp'
    },

    //链接数据库，采用连接池的方式
    //连接池的对象,三个参数，第一个sql语句，第二个数组，第三个回调方法
    //用连接池的好处是在数据很大的时候减少数据查询时间
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config)
        pool.getConnection((err,conn)=>{
            // console.log('123456')
            // console.log(sql);
            if (err) {
                console.log('连接失败')
                console.log(err)
                return;
            }
            // 事件驱动回调
            conn.query(sql,sqlArr,callBack)
            //释放连接
            conn.release();
        })

    },
}