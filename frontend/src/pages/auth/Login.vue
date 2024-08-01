<template>
    <div class="h-25">
        <v-alert
            density="compact"
            v-if="errorMessage"
            type="error"
            variant="outlined"
        >
            <div class="flex justify-between items-center">
                <div>
                    {{errorMessage}}
                </div>

                <div>
                    <span  class="text-2xl cursor-pointer" @click="errorMessage = ''">&times;</span>
                </div>
            </div>
        </v-alert>
    </div>


    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
             alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
            account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-3" @submit="login">
            <div>
                <v-text-field
                    v-model="user.email"
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                />
            </div>

            <div>
                <div>
                    <v-text-field
                        v-model="user.password"
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                    />
                </div>

                <div class="flex items-center justify-between">
                    <div class="text-sm">
                        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                </div>
            </div>

            <div>
                <v-checkbox
                    v-model="user.remember"
                    label="Remember Me"
                    name="remember"
                    type="text"
                />
            </div>

            <div>
                <v-btn color="primary" type="submit">Login</v-btn>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <router-link :to="{name: 'Register'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register an account</router-link>
        </p>
    </div>
</template>

<script setup>
    import {ref} from "vue";
    import store from '@/store';
    import {useRouter} from "vue-router";

    const router = useRouter();

    const user = ref({
        email: '',
        password: '',
        remember: false
    });

    let errorMessage = ref('');

    async function login(event) {
        event.preventDefault();

        try {
            await store.dispatch('login', user);
        } catch(e) {
            console.log(e);
            errorMessage.value = `${e.response.status} | ${e.message}`;
        }

        await router.push({ name: 'Dashboard' });
    }
</script>
