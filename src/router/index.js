import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue';
import NationForm from '../components/pages/NationForm.vue';
import NationData from '../components/pages/NationData.vue';
import TestNation from '../components/pages/TestNation.vue';

const routes = [
    { path: '/', component: TestNation },
    { path: '/nations/create', component: NationForm },
    { path: '/nations/data/', component: NationData, props: route=>({ nation: route.params.nation }) },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;