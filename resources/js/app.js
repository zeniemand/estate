import {createApp} from "vue";
import '../css/app.css';
import router from "@/router/router";
import Admin from "@/admin/Admin.vue";
import Store from "@/store/store";
import i18n from "@/i18n";

createApp(Admin)
    .use(Store)
    .use(router)
    .use(i18n)
    .mount('#admin');
