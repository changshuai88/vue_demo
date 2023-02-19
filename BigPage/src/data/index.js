let divs = [];
for (let i = 1; i <= 10000 ;i++) {

    let obj = {id:"",title:"",web:"",content:{}}
    // console.log(i);
    obj.id = 'div'+i;
    obj.title = '这是'+i+'号广告位';
    obj.web = "<div id ='div"+i+"'></div>";
    divs.push(obj)
   
   
}
export default {divs}