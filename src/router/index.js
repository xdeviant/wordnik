import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Favorites from "../views/Favorites";
import Error404 from "../views/Error404";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/favorites",
    component: Favorites,
  },
  {
    path: "/404",
    component: Error404,
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
