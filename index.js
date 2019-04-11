import Vue from 'blessed-vue'
import App from './App.vue'
import store from './store'

const el = Vue.dom.createElement()

Vue.dom.append(el)

const vm = new Vue({
  name: 'app',
  components: {
    App
  },
  store,
  template: '<App/>'
}).$mount(el)
