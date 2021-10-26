import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignupPage.vue";
import LoginPage from "../views/LoginPage.vue";
import ForgotPasswordPage from "../views/ForgotPasswordPage.vue";
import ReadChaptersPage from "../views/ReadChaptersPage.vue";
import ReadChaptersVersePage from "../views/ReadChaptersVersePage.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/signup",
        name: "SignupPage",
        component: SignupPage,
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/forgotpassword",
        name: "ForgotPasswordPage",
        component: ForgotPasswordPage,
    },
    {
        path: "/chapters",
        name: "ReadChaptersPage",
        component: ReadChaptersPage,
        props: true
    },
    {
        path: "/chapters/:chapterId/verse/:groupId",
        name: "ReadChaptersVersePage",
        component: ReadChaptersVersePage,
        props: true,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;