import {categoryRoutes} from '../domains/categories';
import {noteRoutes} from '../domains/notes';
import {reactionRoutes} from '../domains/reactions';
import {ticketRoutes} from '../domains/tickets';
import {userRoutes} from '../domains/users';

export const routes = [...categoryRoutes, ...noteRoutes, ...reactionRoutes, ...ticketRoutes, ...userRoutes ];




//___________________________ OUD __________________________________
// import UserOverview from '../domains/users/pages/Overview.vue';
// import TicketOverview from '../domains/tickets/pages/Overview.vue';
// import Register from '../domains/auth/pages/Register.vue';
// import Login from '../domains/auth/pages/Login.vue';


// export const routes = [
//     {path: '/', component: TicketOverview},
//     {path: '/UserOverview', component: UserOverview},
//     {path: '/Register', component: Register},
//     {path: '/Login', component: Login},
// ];

