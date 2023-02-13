import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

// import ElementUI from 'element-ui';
import 'element-plus/dist/index.css'

import store from './store'
import 'normalize.css'
import './assets/css/base.css'

// ElementPlus 图标引入 第一步
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

// ElementPlus 图标引入 第二步

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(store).use(router).use(ElementPlus).mount('#app')
