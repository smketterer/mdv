import BlessedVue from 'blessed-vue'
import Vuex from 'vuex'

BlessedVue.use(Vuex)

const state = {}
const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
