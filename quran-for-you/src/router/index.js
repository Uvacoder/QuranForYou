import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignupPage.vue";
import LoginPage from "../views/LoginPage.vue";
import ForgotPasswordPage from "../views/ForgotPasswordPage.vue";
import ReadChapters from "../views/ReadChapters.vue";
import ReadVerse from "../views/ReadVerse.vue";
import Articles from "../views/Articles.vue";
import Profile from "../views/Profile.vue";

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
        path: "/",
        name: "Home",
        component: ReadChapters,
        props: true,
    },
    {
        path: "/chapters/:chapterId/verse/:groupId",
        name: "Read Quran",
        component: ReadVerse,
        props: true,
    },
    {
        path: "/articles",
        name: "Articles",
        component: Articles,
        props: true,
    },
    { path: "/profile", name: "Profile", component: Profile },
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