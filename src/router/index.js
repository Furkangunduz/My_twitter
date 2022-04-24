import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("@/views/HomePage"),
    },
    {
        name: "LoginPage",
        path: "/giris",
        component: () => import("@/views/LoginPage"),
    },
    {
        name: "RegisterPage",
        path: "/kayitol",
        component: () => import("@/views/RegisterPage"),
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

import store from "@/store";

router.beforeEach((to, _, next) => {
    const authRequiredPages = ["HomePage"];
    const authNotRequiredPages = ["LoginPage", "RegisterPage"];

    const isAuth = store.getters._isUserAuthenticated;
    if (authNotRequiredPages.indexOf(to.name) > -1 && !isAuth) next();
    if (authNotRequiredPages.indexOf(to.name) > -1 && isAuth)
        next({ name: "HomePage" });

    if (authRequiredPages.indexOf(to.name) > -1 && isAuth) next();
    if (authRequiredPages.indexOf(to.name) > -1 && !isAuth)
        next({ name: "LoginPage" });
});

export default router;
