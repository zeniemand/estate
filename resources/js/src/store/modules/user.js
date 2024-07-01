import axiosClient from "@/axios";

export default {
    namespaced: true,
    state () {
        return {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        }
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({data}) => {
                    commit("setUser", data);
                    return data;
                });


        },
        login({commit}, userData){
            return axiosClient.post('/login', userData)
                .then(({data}) => {
                    commit("setUser", data);
                    return data;
                });
        }
    },
    mutations: {
        logout: state => {
            state.data =  {};
            state.token = null;
            sessionStorage.clear();
        },
        setUser: (state, userData) => {
            state.data = userData.user;
            state.token = userData.token;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    }
};
