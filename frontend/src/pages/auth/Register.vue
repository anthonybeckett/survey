<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
             alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register an account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
            <div>
                <v-text-field
                    label="Full name"
                    name="name"
                    type="text"
                    variant="outlined"
                    required
                />
            </div>

            <div>
                <v-text-field
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
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        required
                    />
                </div>

                <div class="mt-2">
                    <v-text-field
                        label="Password Confirmation"
                        name="password-confirmation"
                        type="password"
                        variant="outlined"
                        required
                    />
                </div>
            </div>

            <div>
                <v-btn color="primary">Register</v-btn>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <router-link :to="{name: 'Login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</router-link>
        </p>
    </div>
</template>

<script setup>

</script>
