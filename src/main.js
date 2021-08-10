import Vue from 'vue'
import App from '@/App'
import router from '@/router'
//@ 是一个别名  代表着我们的src路径
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router  //我们所有的组件内部都可以使用this.$router 和 this.$route
}).$mount('#app')
