import { createMemoryHistory, createRouter } from "vue-router";

const router =  createRouter({
    history: createMemoryHistory(),
    routes: [],
});


export const goToRoute = (name: string, id?: number) => {
    const route: { name: string; params?: { id: number } } = { name };

    // Voeg de 'id' toe aan de 'params' als deze aanwezig is
    if (id) {
        route.params = { id };
    }

    // Navigeer naar de opgegeven route
    router.push(route);

};

export const addRoutes = (routes: RouteRecordRaw[]) => {
    for (const route of routes) {
        router.addRoute(route);
    }
};

export const createRoute = (name: string, path: string, component: Component) => {
    return {
        name,
        path,
        component
    };
};