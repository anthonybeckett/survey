<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register an account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <v-text-field label="Email" type="email" variant="outlined" />
                </div>

                <div>
                    <div class="mt-2">
                        <v-text-field label="Password" type="password" variant="outlined" />
                    </div>

                    <div class="mt-2">
                        <v-text-field label="Password Confirmation" type="password-confirmation" variant="outlined" />
                    </div>
                </div>

                <div>
                    <v-btn color="primary">Register</v-btn>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Already a member?
                <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</a>
            </p>
        </div>
    </div>
</template>

<script setup>

</script>
