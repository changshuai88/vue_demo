const Mock = require('mockjs')
const Random = Mock.Random
module.exports = ()=>{
    let data = {news:[]}

    for (let i = 0; i < 20; i++) {
        data.news.push({
            id:i,
            content:Random.cparagraph(5)  //后面的参数表示生成5句话
        })
        
    }
    return data
}