import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 관리 객체
const store = new Vuex.Store({
    state: {
        counter: 0
    }
});

export default store;