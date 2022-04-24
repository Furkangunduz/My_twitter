import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("@/views/HomePage"),
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
