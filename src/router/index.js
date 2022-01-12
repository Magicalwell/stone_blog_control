import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import layout from "@/views/layout";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
export const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index"),
  },
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    component: layout,
    meta: { title: "首页" },
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
        meta: { title: "主控台", fixed: true, canDelete: false },
      },
    ],
  },
  { path: "/404", component: () => import("@/views/errorPage/error404.vue") },
];
export const asyncRoutes = [
  {
    path: "/document",
    name: "document",
    component: layout,
    redirect: "/document/manageDoc",
    meta: { title: "文件管理", icon: "el-icon-folder" },
    children: [
      {
        path: "/document/manageDoc",
        name: "manage",
        component: () => import("@/views/document/index.vue"),
        meta: { title: "管理文档", canDelete: true },
      },
      {
        path: "/document/addDoc",
        name: "addDoc",
        component: () => import("@/views/document/add/index.vue"),
        meta: { title: "新增文档", canDelete: true },
      },
    ],
  },
  {
    path: "/messageboard",
    name: "messageboard",
    component: layout,
    redirect: "/messageboard/manageMsg",
    meta: { title: "留言板", icon: "el-icon-document" },
    children: [
      {
        path: "/messageboard/manageMsg",
        name: "manageMsg",
        component: () => import("@/views/messageboard/messageboard.vue"),
        meta: { title: "留言板管理", canDelete: true },
      },
    ],
  },
  {
    path: "/project",
    name: "project",
    component: layout,
    redirect: "/project/projectshow",
    meta: { title: "项目管理", icon: "el-icon-document" },
    children: [
      {
        path: "/project/projectshow",
        name: "projectshow",
        component: () => import("@/views/project/showproject.vue"),
        meta: { title: "项目展示", canDelete: true },
      },
      {
        path: "/project/projectcontrol",
        name: "projectcontrol",
        component: () => import("@/views/project/projectcontrol/control.vue"),
        meta: { title: "项目管理", canDelete: true },
      },
    ],
  },
  {
    path: "/power",
    name: "power",
    component: layout,
    redirect: "/power/powerrole",
    meta: { title: "权限管理", icon: "el-icon-document" },
    children: [
      {
        path: "/power/powerrole",
        name: "powerrole",
        component: () => import("@/views/power/powerRole/role.vue"),
        meta: { title: "角色权限", canDelete: true },
      },
      {
        path: "/power/powerpage",
        name: "powerpage",
        component: () => import("@/views/power/powerPage/page.vue"),
        meta: { title: "页面权限", canDelete: true },
      },
    ],
  },
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new VueRouter({
    routes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
