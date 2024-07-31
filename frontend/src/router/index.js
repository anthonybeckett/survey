import { createRouter, createWebHistory } from 'vue-router/auto'
import Dashboard from "@/pages/Dashboard.vue";
import AuthRoutes from './auth.js';
import MainLayout from "@/layouts/MainLayout.vue";
import Surveys from "@/pages/Surveys.vue";
import store from "@/store";
import AuthLayout from "@/layouts/AuthLayout.vue";

const routes = [
    {
        path: '/',
        redirect: 'dashboard',
        component: MainLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '/dashboard', name: 'Dashboard', component: Dashboard },
            { path: '/surveys', name: 'Surveys', component: Surveys },
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta: {isGuest: true},
        children: [
            ...AuthRoutes
        ]
    }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' });
    } else if (store.state.user.token && to.meta.isGuest) {
        next({ name: 'Dashboard' });
    } else {
        next();
    }
})

export default router
