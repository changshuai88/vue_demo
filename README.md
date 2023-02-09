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

