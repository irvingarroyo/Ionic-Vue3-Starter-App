// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHistory } from "@ionic/vue-router";
// import { RouteRecordRaw } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("@/views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
