import Vue from "vue";
import VueRouter from "vue-router";
import ecommerce from "../views/ecommerce.vue";
import analytics from "../views/analytics.vue";
import Email from "../views/Email.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "ecommerce",
        component: ecommerce,
    },
    {
        path: "/analytics",
        name: "analytics",
        component: analytics,
    },
    {
        path: "/Email",
        name: "Email",
        component: Email,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
