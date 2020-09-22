import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
let auth = require("../models/auth");

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/reports/",
        name: "Reports",
        component: () => import("../views/Report.vue"),
    },
    {
        path: "/reports/week/:id",
        name: "Week",
        component: () => import("../views/Week.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/logout",
        name: "Logout",
        redirect: "/login",
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
        beforeEnter: (to, from, next) => {
            console.log(from.name);
            if (!auth.token) next({ name: "Login" });
            else next();
        },
    },
];

const router = new VueRouter({
    routes,
});

export default router;
