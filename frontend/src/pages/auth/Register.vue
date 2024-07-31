<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
             alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register an account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit="register">
            <div>
                <v-text-field
                    v-model="user.name"
                    label="Full name"
                    name="name"
                    type="text"
                    variant="outlined"
                    required
                />
            </div>

            <div>
                <v-text-field
                    v-model="user.email"
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    required
                />
            </div>

            <div>
                <div class="mt-2">
                    <v-text-field
                        v-model="user.password"
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        required
                    />
                </div>

                <div class="mt-2">
                    <v-text-field
                        v-model="user.passwordConfirmation"
                        label="Password Confirmation"
                        name="password_confirmation"
                        type="password"
                        variant="outlined"
                        required
                    />
                </div>
            </div>

            <div>
                <v-btn color="primary" type="submit">Register</v-btn>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <router-link :to="{name: 'Login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</router-link>
        </p>
    </div>
</template>

<script>
    import store from "@/store";
    import {useRouter} from "vue-router";

    const router = useRouter();

    export default {
        data: () => ({
            user: {
                name: '',
                email: '',
                password: '',
                passwordConfirmation: '',
            },
        }),
        methods: {
            async register(event) {
                event.preventDefault();

                let userRegistered = await store.dispatch('register', this.user);

                console.log(userRegistered);

                await router.push({ name: 'Dashboard' });
            }
        }
    }
</script>
