import {createApp} from "vue";
import '../css/app.css';
import router from "@/router/router";
import Admin from "@/admin/Admin.vue";
import Store from "@/store/store";

createApp(Admin)
    .use(Store)
    .use(router)
    .mount('#admin');
