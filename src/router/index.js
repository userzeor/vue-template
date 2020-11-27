import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home.vue"),
    meta: { title: "首页" },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    window.document.title = to.meta.title;
  }
  next();
});

export default router;
