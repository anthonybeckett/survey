import { createRouter, createWebHistory } from 'vue-router/auto'
import Dashboard from "@/pages/Dashboard.vue";
import AuthRoutes from './auth.js';
import MainLayout from "@/layouts/MainLayout.vue";
import Surveys from "@/pages/Surveys.vue";

const routes = [
    {
        path: '/',
        redirect: 'dashboard',
        component: MainLayout,
        children: [
            { path: '/dashboard', name: 'Dashboard', component: Dashboard },
            { path: '/surveys', name: 'Surveys', component: Surveys },
        ]
    },
    ...AuthRoutes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
