import Login from "@/pages/auth/Login.vue";
import Register from "@/pages/auth/Register.vue";

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
];
