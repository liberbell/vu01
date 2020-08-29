import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

var app = new Vue({
  el: '#the_food_app',
  data: {
      title: 'The Food App',
      subtitle: 'This app is about food!',
  }
});