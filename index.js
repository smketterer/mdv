import Vue from 'blessed-vue'
import App from './App.vue'

const el = Vue.dom.createElement()
Vue.dom.append(el)

const vm = new Vue({
  name: 'app',
  components: {
    App
  },
  template: '<App/>'
}).$mount(el)
