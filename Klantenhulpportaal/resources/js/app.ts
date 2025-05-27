import './bootstrap';

import { createApp } from "vue";
import App from "./App.vue";
import { addRoutes, useRouterInApp } from './services/router';
import { routes } from './router/routes';
import { setAuthRoutes } from './services/auth';
import { authRoutes } from './domains/auth';
import {checkIfLoggedIn} from './domains/auth';

const app = createApp(App);

addRoutes(routes);

try {
    await checkIfLoggedIn();
} catch (_) {
    // so we dont get stuck in an endless loop of refreshing and checking if logged in
} finally {
    useRouterInApp(app);
    app.mount('#app');
}


// console.log(authRoutes)

// setAuthRoutes(authRoutes);

// addRoutes(routes)

// const app = createApp(App);
// useRouterInApp(app)
// app.mount("#app");