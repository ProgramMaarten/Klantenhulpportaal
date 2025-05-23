import UserOverview from '../domains/users/pages/UserOverview.vue';
import TicketOverview from '../domains/tickets/pages/TicketOverview.vue';
import Register from '../domains/auth/pages/Register.vue';
import Login from '../domains/auth/pages/Login.vue';

export const routes = [
    {path: '/', component: TicketOverview},
    {path: '/UserOverview', component: UserOverview},
    {path: '/Register', component: Register},
    {path: '/Login', component: Login},
];
