import Dashboard from "@/admin/pages/Dashboard.vue";
import Login from "@/admin/pages/Login.vue";
import Register from "@/admin/pages/Register.vue";


const routes = [
    {
        path: '/admin/',
        name: 'Dashboard',
        component: Dashboard,
    },
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
];

export default routes;
