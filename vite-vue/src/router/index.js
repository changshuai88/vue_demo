import { createRouter, createWebHistory } from 'vue-router'
import Layout from'@/views/Layout/index.vue'
import Login from'@/views/Login/index.vue'
import Home from'@/views/Home/index.vue'

// Goods
const Goods = ()=>import('@/views/Goods/index.vue')
const GoodsList = ()=>import('@/views/Goods/GoodsList.vue')
const Category = ()=>import('@/views/Goods/Category.vue')
// console.log(Goods);
// import Goods from '@/views/Goods/index.vue'

const routes = [ 
  {
    path:'/',
    component:Layout,
    children:[
      {
        path:'/',
        name:'home',
        component:Home
      },
      {
        path:'/goods',
        name:'goods',
        component:Goods,
        children:[
          {
            path:'list',
            name:'list',
            component:GoodsList
          },
          {
            path:'category',
            name:'category',
            component:Category
          }
        ]
      }
    ]

  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
