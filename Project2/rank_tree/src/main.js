import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// 引入路由
import router from './router'
// 引入store
import store from './store'
// 重置样式
import '@/scss/_reset.scss'

createApp(App).use(store).use(router).mount('#app')
