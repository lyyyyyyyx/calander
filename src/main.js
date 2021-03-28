import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
import axios from 'axios';
require('@/assets/gobal.css')
import './assets/iconfont/iconfont.css'

Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ElementUI,
  render: h => h(App)
}).$mount('#app')
