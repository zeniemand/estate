<script>

import DefaultLayout from "./components/DefaultLayout.vue";
export default {
    name: "Admin",
    components: {DefaultLayout},
    data(){
        return {
            name: 'Victor'
        }
    }
}
</script>

<template>

    <router-view />

</template>

<style scoped>

</style>
