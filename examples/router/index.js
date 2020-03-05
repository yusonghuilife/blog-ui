import Vue from "vue";
import VueRouter from "vue-router";
import main from "../pages/Main.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name:"Main",
    component: main
  },
  {
    path: "/detail",
    name: "Detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "detail" */ "../pages/Detail.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
