import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";
import store from "@/store/store";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !store.state.user.token){
        next({name: 'Login'});
    } else if(store.state.user.token && (to.meta.isGuest)) {
        next({name: 'Dashboard'});
    }
    else {
        next();
    }
})

export default router;
