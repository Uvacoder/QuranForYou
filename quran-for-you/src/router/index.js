import Vue from 'vue'
import VueRouter from 'vue-router'
import SignupPage from '../views/SignupPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ForgotPasswordPage from '../views/ForgotPasswordPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth/signup',
    name: 'SignupPage',
    component: SignupPage
  },
  {
    path: '/auth/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/auth/forgotpassword',
    name: 'ForgotPasswordPage',
    component: ForgotPasswordPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
