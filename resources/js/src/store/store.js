import Vuex from 'vuex'

const store = new Vuex.Store({
    state () {
        return {
            count: 0,
            user: {
                data: {
                    name: 'John',
                    email: 'john@example.com',
                    imageUrl:
                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
                //token: null
                token: '123'
            }
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        logout: state => {
            state.user.data =  {};
            state.user.token = null;
        }
    }
})

export default store;
