import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state: {
        user: null,
    },
    getters: {
        _isUserAuthenticated: (state) => state.user !== null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
    plugins: [createPersistedState({})],
});
export default store;
