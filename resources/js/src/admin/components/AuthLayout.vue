<script>
import LanguageSwitcher from "@/admin/components/LanguageSwitcher.vue";
export default {
    name: "AuthLayout",
    components: {LanguageSwitcher}
}
</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <LanguageSwitcher/>

        <router-view></router-view>

    </div>
</template>

<style scoped>

</style>
