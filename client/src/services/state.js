import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        trips: null

    },
    getters: {
        get_departure: state => state.departure
    },
    mutations: {
        set_data(state, data) {
            state.trips = data
        }
        // other mutations
    }
})