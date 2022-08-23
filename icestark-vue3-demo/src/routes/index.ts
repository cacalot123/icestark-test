import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import isInIcestark from "@ice/stark-app/lib/isInIcestark";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

import getBasename from "@ice/stark-app/lib/getBasename";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/home",
    component: HomeView,
  }, 
  {
    path: "/about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  }, 
  {
    path: "/list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  }
];
const history = createWebHistory(isInIcestark() ? getBasename() : "/");

const router = createRouter({
  history,
  routes,
});

export default routes;
