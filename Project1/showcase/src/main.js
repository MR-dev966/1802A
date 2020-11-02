import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
// 引入compostion-api
import CompositionApi from '@vue/composition-api'
// 引入vue-echarts
import ECharts from 'vue-echarts'
// 引入echart
import 'echarts'

Vue.component('v-chart', ECharts)
Vue.use(CompositionApi)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
