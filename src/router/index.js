import store from "../store";

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "@/views/SignUp";
import Login from "@/views/Login";
import Dashboard from "@/views/dashboard/Dashboard";
import MyAccount from "@/views/dashboard/MyAccount";
import Leads from "@/views/dashboard/Leads";
import AddLead from "@/views/dashboard/AddLead";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/log-in",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/my-account",
    name: "MyAccount",
    component: MyAccount,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/leads",
    name: "Leads",
    component: Leads,
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/dashboard/leads/add",
    name: "AddLead",
    component: AddLead,
    meta: {
      requiredLogin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiredLogin) &&
    !store.state.isAuthenticated
  ) {
    next("/log-in");
  } else {
    next();
  }
});

export default router;
