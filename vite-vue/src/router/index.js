import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import About from '@/views/about/About.vue'
import Product from '@/views/product/index.vue'
import Py from '@/views/product/Py/index.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    children:[
      {
        path: 'py',
        // name: 'Py',
        component: Py,

      }
    ]
  }
  
   
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
