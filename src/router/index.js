import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store/index";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.authenticated) {
      next();
    } else {
      next({ path: "/login" });
    }
  } else if (to.matched.some(record => record.meta.requiresUnauth)) {
    if (!store.state.authenticated) {
      next();
    } else {
      next({ path: "/dashboard" });
    }
  } else {
    next();
  }
});

export default router;
