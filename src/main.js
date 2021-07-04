import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import './plugins/element.js'

Vue.use(VueCookie)
Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

// 根据前端的跨域方式做调整 此方式为接口代理 /api为前缀
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(
  response => {
    const res = response.data
    const path = location.hash
    if (res.status === 0) {
      return res.data
    } else if (res.status === 10) {
      // 业务错误拦截(http状态码为200)
      if (path !== '#/index') {
        location.href = '/#/login'
      }
      return Promise.reject(res)
    } else {
      Vue.prototype.$message.warning(res.msg)
      return Promise.reject(res)
    }
  },
  err => {
    // 服务器错误拦截(http状态码为500)
    const res = err.response
    Vue.prototype.$message.error(res.data.message.slice(-6))
    return Promise.reject(err)
  }
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
