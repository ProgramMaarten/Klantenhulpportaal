import Overview from './pages/Overview.vue';
import Create from './pages/Create.vue';
import Login from './pages/Login.vue';

export const routes = [
    {path: '/', component: Overview},
    {path: '/Create', component: Create},
    {path: '/Login', component: Login},
];
