import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue';
import NationForm from '../components/pages/NationForm.vue';
import NationData from '../components/pages/NationData.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/nations/create', component: NationForm },
    { path: '/nations/data/', component: NationData, props: route=>({ nation: route.params.nation }) },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;