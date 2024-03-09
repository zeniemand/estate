import Vuex from 'vuex'
import user from "@/store/modules/user";

const store = new Vuex.Store({
    modules: {
        user
    }
})

export default store;
