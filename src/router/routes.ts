import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/error/NoAuthView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
  },
  {
    path: "/about",
    name: "关于我的",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/admin",
    name: "管理员",
    component: AdminView,
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/noauth",
    name: "无权限",
    component: NoAuthView,
  },
];
