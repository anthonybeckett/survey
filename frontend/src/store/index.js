import {createStore} from "vuex";
import axiosClient from "@/api/axios";

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        }
    },
    getters: {},
    actions: {
        async register({ commit }, user) {
            try {
                await axiosClient.get('/sanctum/csrf-cookie');

                const response = await axiosClient.post('/register', user);

                if (response.data) {
                    return null;
                }

                commit('setUser', response.data);

                return response.data;
            } catch (e) {
                console.error(e);
            }
        },
        async login({ commit }, user) {
            try {
                await axiosClient.get('/sanctum/csrf-cookie');

                const response = await axiosClient.post('/login', user);

                if (response.data) {
                    return null;
                }

                commit('setUser', response.data);

                return response.data;
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
    },
    mutations: {
        logout: state => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        },
    },
    modules: {}
});

export default store;
