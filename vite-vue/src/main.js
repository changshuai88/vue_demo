import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

// import ElementUI from 'element-ui';
import 'element-plus/dist/index.css'

import store from './store'



createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
