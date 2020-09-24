import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue'
import Notify from '../views/NotifyPage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/notify',
        name: 'Notify',
        component: Notify
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
