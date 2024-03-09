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
            return fetch('http://127.0.0.1:8000/api/register', {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                method: "POST",
                body: JSON.stringify(user)
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    commit("setUser", data);
                });
        },
    },
    mutations: {
        logout: state => {
            state.user.data =  {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.data = userData.user;
            state.token = userData.token;
            sessionStorage.setItem('TOKEN', userData.token);
        },
    }
};
