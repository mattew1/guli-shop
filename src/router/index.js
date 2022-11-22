import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Search from "@/views/Search";

const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

//函数的重写
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve === undefined && reject === undefined) {
    return originalPush.call(this, location).catch(() => {});
  } else {
    return originalPush.call(this, location, resolve, reject);
  }
};

VueRouter.prototype.replace = function replace(location, resolve, reject) {
  if (resolve === undefined && reject === undefined) {
    return originalReplace.call(this, location).catch(() => {});
  } else {
    return originalReplace.call(this, location, resolve, reject);
  }
};

Vue.use(VueRouter);

// 静态路由表
const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      isHidden: true, // 表示是否隐藏
    },
  },
  {
    path: "/search/:keyword?", //:占位符  ? 表示可传可不传
    name: "search",
    component: Search,
    props: (route) => ({
      keyword: route.params.keyword,
      keyword1: route.query.keyword1,
      a: 1,
      b: "abc",
    }),
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      isHidden: true,
    },
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
