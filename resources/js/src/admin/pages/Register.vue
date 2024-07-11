<script setup>
import store from "@/store/store";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();

let errorNameMsg = ref('');
let errorMailMsg = ref('');
let errorPassMsg = ref('');

function assignErrorNameMsg(err){
    if (err && err !== 'undefined'){
        errorNameMsg.value = err[0];
        console.log('name error message is: ' + errorNameMsg.value);
    }

}
function assignErrorMailMsg(err){
    if (err && err !== 'undefined'){
        errorMailMsg.value = err[0];
        console.log('email error message is: ' + errorMailMsg.value);
    }
}

function assignErrorPassMsg(err){
    if (err && err !== 'undefined'){
        errorPassMsg.value = err[0];
        console.log('password error message is: ' + errorPassMsg.value);
    }
}

function register(ev){
    ev.preventDefault();
    store.dispatch('user/register', user)
        .then(() => {
                router.push({
                    name: 'Dashboard'
                });
            }
        )
        .catch(err => {
            if(err.response.data.errors && err.response.data.errors !== 'unefined'){
                let errors = JSON.stringify(err.response.data.errors);
                console.log('errors data: ' + errors );
                errors = err.response.data.errors;
                assignErrorNameMsg(errors.name);
                assignErrorMailMsg(errors.email);
                assignErrorPassMsg(errors.password)
            }
        })
};

//for test (then clear):
/*const user = {
    name: 'mike',
    email: 'mike@mail.com',
    password: '!Umike12345678',
    password_confirmation: '!Umike12345678'
}*/

const user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
}

</script>

<template>

        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                class="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9
            tracking-tight text-gray-900">{{ $t("register.header") }}</h2>
            <div class="mt-2 text-center text-sm text-gray-600">
                <router-link
                    :to="{name: 'Login'}"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    Or login to your account
                </router-link>
            </div>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
                class="space-y-6"
                @submit="register"
            >
                <div>
                    <div v-if="errorNameMsg"
                         class="flex items-center justify-between py-3 px-5 text-white rounded bg-red-500">
                        <span class="font-medium">WARNING!</span> {{ errorNameMsg }}
                        <span @click="errorNameMsg= ''"
                              class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>

                    </span>
                    </div>
                    <label
                        for="fullname"
                        class="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Full Name
                    </label>
                    <div class="mt-2">
                        <input
                            id="fullname"
                            name="name"
                            type="text"
                            autocomplete="name"
                            required=""
                            v-model="user.name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <div v-if="errorMailMsg" class="flex items-center justify-between py-3 px-5 text-white rounded bg-red-500">
                        <span class="font-medium">WARNING!</span> {{errorMailMsg}}
                        <span @click="errorMailMsg= ''" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </span>
                    </div>
                    <label
                        for="email"
                        class="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Email address
                    </label>
                    <div class="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required=""
                            v-model="user.email"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div v-if="errorPassMsg" class="flex items-center justify-between py-3 px-5 text-white rounded bg-red-500">
                        <span class="font-medium">WARNING! </span> {{ errorPassMsg }}
                        <span @click="errorPassMsg= ''"
                              class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>

                        </span>
                    </div>
                        <label
                            for="password"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Password
                        </label>
                    <div class="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            v-model="user.password"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label
                            for="password_confirmation"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Password Confirmation
                        </label>
                    </div>
                    <div class="mt-2">
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            autocomplete="current-password_confirmation"
                            required=""
                            v-model="user.password_confirmation"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>


                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                    >
                        Sign up
                    </button>
                </div>
            </form>

        </div>

</template>

<style scoped>

</style>
