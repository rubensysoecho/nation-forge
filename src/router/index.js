import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import GenForm from '../pages/GenForm.vue';
import NationData from '../pages/NationData.vue';
import NationsList from '../pages/NationsList.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/nation/generate', component: GenForm },
    { path: '/nation/data', component: NationData },
    { path: '/nation/list', component: NationsList }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;