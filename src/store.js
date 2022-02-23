import { createStore } from 'vuex'

let store = createStore({
    state() {
        return {
            aString: ""
        }
    },
    mutations: {
        commitString: (state, payload) => {
            state.aString = payload
        }
    },
    actions: {
        setString: ({ commit, state}, value) => {
            commit('commitString', value)
        }
    },
    getters: {
        getString: (state) => {
            return state.aString
        }
    }
})

export default store