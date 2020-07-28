import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        trips: null,
        traveller:null,
        booking:null
    },
    getters: {
        get_departure: state => state.departure
    },
    mutations: {
        set_data(state, data) {
            state.trips = data
        },
        set_traveller(state, data) {
            state.traveller = data
        },
        set_booking(state, data) {
            state.booking = data
        }
        // other mutations
    }
})