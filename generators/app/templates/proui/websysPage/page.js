'use strict'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import 'customerVueDirectives'
import store from './vuex/_store.js'
import Page from './components/_<%= name %>.vue'

window.mainAPP = new Vue({
  el: '#app',
  template: '<page></page>',
  store,
  components: {
    Page
  }
})
