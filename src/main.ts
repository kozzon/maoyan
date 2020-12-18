import Vue from 'vue'
import App from './App.vue'

import "amfe-flexible";

// 引入vant组件库
import 'Utils/importVant'

// 引入router
import myRouter from '../src/router/index'

// 引入animate.css
import 'animate.css'

// 引入store
import store from './store/index'

// 引入混入
import './mixins'

// 激活自定义插件
import myPlguin from '@/plugins';
Vue.use(myPlguin)

// 引入swiper
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// 统一做一个axios的引入
import request from './utils/request'
Vue.prototype.$request= request 

// 引入全局导航守卫
// import '@/router/global'

Vue.config.productionTip = false

new Vue({
  router: myRouter,
  store: store,
  render: h => h(App),
}).$mount('#app')
