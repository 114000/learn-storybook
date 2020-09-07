import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueCompositionApi from '@vue/composition-api'

Vue.use(Antd)
Vue.use(VueCompositionApi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
