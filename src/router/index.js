import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import GenForm from '../pages/GenForm.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/nation/generate', component: GenForm }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;