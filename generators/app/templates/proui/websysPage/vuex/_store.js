import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './_state'
import getters from './_getters'
import actions from './_actions'
import mutations from './_mutations'

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
