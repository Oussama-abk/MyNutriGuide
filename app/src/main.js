import { createApp } from 'vue';
import App from './App.vue';
import eventBus from 'vue3-eventbus'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('./pages/Home.vue'),
    },
    {
        path: '/recipie/:dish',
        component: () => import('./pages/Recipies.vue'),
    },
    {
        path: '/LeftofRecipie/:ingredient',
        component: () => import('./pages/LeftofRecipie.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.use(eventBus)
app.mount('#app');

