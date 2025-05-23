import './bootstrap';

import { createApp } from "vue";
import App from "./App.vue";
import { addRoutes, useRouterInApp } from './services/router';
import { routes } from './router/routes';
import { setAuthRoutes } from './services/auth';

setAuthRoutes();

addRoutes(routes)

const app = createApp(App);
useRouterInApp(app)
app.mount("#app");