# vue_demo
根据vue做的一些插件，这样就可以重复使用了。

# 使用vite部署环境 
1. npm init vite 
2. 输入一个项目名称
3. 选择vue，回车，再选择vue，回车
4. cd进入项目文件夹
5. npm install
6. npm run dev
基本环境搭建完成，需要其他的可以再使用过程中添加，并创建相关文件

# 安装Vue-Router
1. 在终端安装npm install vue-router@next
2. 在main.js中引入router，并在项目挂载中use（router）
3. 在src文件夹中创建router文件夹，并创建index.js
4. 在index.js中做如下布置：
```
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
   
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

# 搭建本地api
## 部署环境
1. express安装 npm i -g express
2. generator安装 npm i -g express-generator
3. 安装nodemon
4. 创建express，命令 express 文件名
5. 命令启动 ：npm start
6. 改写api从www文件转到app.js
   ```
   var app = express();
   // 改写
   var http = require('http');
   var server = http.createServer(app);
   // 不用在导出
   // module.exports = app;
   // 重写端口
   server.listen('3000')
   ```
7. 安装MySQL，npm i mysql -S
8. 创建util文件夹，创建链接数据库文件dbconfig.js
9. 安装第三方插件，body-parser
    npm i body-parser --save
10. 安装阿里大鱼
    npm i @alicloud/pop-core --save
    
  