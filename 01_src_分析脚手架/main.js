import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  // render:q=>q('h1','你好啊')
  render: h => h(App),
// }).$mount('#app')

})
