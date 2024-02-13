import Dashboard from "@/admin/pages/Dashboard.vue";
import Login from "@/admin/pages/Login.vue";
import Register from "@/admin/pages/Register.vue";
import DefaultLayout from "@/admin/components/DefaultLayout.vue";
import Offers from "@/admin/pages/Offers.vue";
import AuthLayout from "@/admin/components/AuthLayout.vue";


const routes = [
    {
        path: '/admin/',
        redirect: '/admin/dashboard',
        component: DefaultLayout,
        props: true,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/admin/dashboard',
                name: 'Dashboard',
                component: Dashboard,
            },
            {
                path: '/admin/offers',
                name: 'Offers',
                component: Offers
            }
        ]
    },
    {
        path: '/admin/auth',
        redirect: '/admin/login',
        name: 'Auth',
        component: AuthLayout,
        meta: {
            isGuest: true
            //isGuest: false
        },
        children: [
            {
                path: '/admin/login',
                name: 'Login',
                component: Login,
            },
            {
                path: '/admin/register',
                name: 'Register',
                component: Register,
            }
        ]
    },

];

export default routes;
