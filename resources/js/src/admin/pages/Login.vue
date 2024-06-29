<script>
import store from "@/store/store";
import router from "@/router/router";
export default {
    name: "Login",
    data(){
        return {
            pageName: 'Login',
            email: '',
            password: '',
            data: {},
            errorMessage: '',
            errorMailMsg: '',
            errorPasswordMsg: '',
        }
    },
    methods: {
        /*to del>*/
        showState(){
            console.log('current user data: ' + JSON.stringify(store.state.user))
        },
        getMessage() {
            console.log('tipped: email: ' + this.email + ' entered password: ' + this.password);
        },
        /*to del<*/
        login(ev) {
            ev.preventDefault();

            let data = {
                email: this.email,
                password: this.password
            }
            store.dispatch('user/login', data)
                .then(() => {
                    router.push({
                        name: "Dashboard"
                    })
                })
                .catch(( err ) => {

                    if(err.response.data.errors && typeof err.response.data.errors !== 'undefined'){

                        if(err.response.data.errors.password && typeof err.response.data.errors.password !== 'undefined'){
                            this.errorPasswordMsg = err.response.data.errors.password[0];
                        }

                        if(err.response.data.errors.email && typeof err.response.data.errors.email !== 'undefined'){
                            this.errorMailMsg = err.response.data.errors.email[0];
                        }

                    }

                    if(err.response.data.message && typeof err.response.data.message !== 'undefined'){
                        this.errorMessage = err.response.data.message;
                    }
                });
        },
    },
    mounted() {
        console.log('Component ' + this.pageName + ' is mounted!!!');
        this.showState();

    }
}
</script>

<template>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        <div class="mt-2 text-center text-sm text-gray-600">
            <router-link
                :to="{name: 'Register'}"
                class="font-medium text-indigo-600 hover:text-indigo-500"
            >
                Or register for free
            </router-link>
        </div>
    </div>


    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
            <div>
                <div v-if="errorMessage" class="flex items-center justify-between py-3 px-5 text-white rounded bg-red-500">
                    <span class="font-medium">WARNING!</span> {{errorMessage}}
                    <span @click="errorMessage= ''" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </span>
                </div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div v-if="errorMailMsg" class="flex items-center justify-between py-3 px-5 text-white rounded bg-red-500">
                    <span class="font-medium">WARNING!</span> {{errorMailMsg}}
                    <span @click="errorMailMsg= ''" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </span>
                </div>
                <div class="mt-2">
                    <input
                        id="email"
                        name="email"
                        v-model="email"
                        type="email"
                        autocomplete="email"
                        required=""
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900
                                shadow-sm ring-1 ring-inset ring-gray-300
                                placeholder:text-gray-400 focus:ring-2
                                focus:ring-inset
                                focus:ring-indigo-600
                                sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>
                <div v-if="errorPasswordMsg" class="flex items-center justify-between py-3 px-5 text-white rounded bg-red-500">
                    <span class="font-medium">WARNING!</span> {{errorPasswordMsg}}
                    <span @click="errorPasswordMsg= ''" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </span>
                </div>
                <div class="mt-2">
                    <input
                        id="password"
                        name="password"
                        v-model="password"
                        type="password"
                        autocomplete="current-password"
                        required=""
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                        focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    @click="login"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3
                    py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in
                </button>
            </div>
        </form>

    </div>

</template>

<style scoped>

</style>
