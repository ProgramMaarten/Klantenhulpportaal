import './bootstrap';

import { createApp } from "vue";
import App from "./App.vue";
import { addRoutes, useRouterInApp } from './services/router';
import { routes } from './router/routes';
import Login from './domains/auth/pages/Login.vue';
import { checkIfLoggedIn, setAuthRoutes } from './services/auth';
import ResetPassword from './domains/auth/pages/ResetPassword.vue';
import Register from './domains/auth/pages/Register.vue';
import RequestResetPassword from './domains/auth/pages/RequestResetPassword.vue';

const app = createApp(App);

addRoutes(routes);

setAuthRoutes(Login, RequestResetPassword, ResetPassword, Register)

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