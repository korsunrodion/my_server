import Vue from 'vue'
import App from './App.vue'

var assert = require('assert');

Vue.config.productionTip = false
  
var data = {
  state_running: 0,
  state_mode: 'work', // ['work', 'sbreak', 'lbreak']
  scheme: [25, 5, 15]
}

var vm = new Vue({
  data: data,
  render: h => h(App),
}).$mount('#app')

vm.$watch('state_running', function (newValue, oldValue) {
  assert(oldValue * newValue == 0 && oldValue + newValue == 1)
  if (newValue == oldValue) {
    return;
  } else if (newValue == 1) {
    // start timer
    console.log('starting')
  } else if (newValue == 0) {
    // stop timer
    console.log('stopping')
  }
})