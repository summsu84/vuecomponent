import Vue from 'vue'
import Vuex from 'vuex'
import firstStore from './moduleFirstStore'
import secondStore from './moduleSecondStore'

Vue.use(Vuex)

// 관리 객체
// 모듈 스토어
const store = new Vuex.Store({
  state: {
    counter: 0
  },
  modules: {
    first: firstStore,
    second: secondStore
  }
})

export default store
