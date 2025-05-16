import UserOverview from '../domains/users/pages/UserOverview.vue';
import TicketOverview from '../domains/tickets/pages/TicketOverview.vue';
import Create from '../domains/users/pages/Create.vue';
import Login from '../domains/users/pages/Login.vue';

export const routes = [
    {path: '/', component: TicketOverview},
    {path: '/UserOverview', component: UserOverview},
    {path: '/Create', component: Create},
    {path: '/Login', component: Login},
];
