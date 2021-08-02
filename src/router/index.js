import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "login",
    hidden: true,
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    mate: {
      title: "登录",
    },
    component: () => import("@/views/login/Index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    hidden: true,
    mate: {
      title: "注册",
    },
    component: () => import("@/views/register/Index.vue"),
  },
  {
    path: "/forget",
    name: "Forget",
    hidden: true,
    mate: {
      title: "忘记密码",
    },
    component: () => import("@/views/forget/Index.vue"),
  },
  {
    path: "/index",
    name: "Index",
    mate: {
      title: "首页",
    },
    component: () => import("@/views/layout/Index.vue"),
  },
  {
    path: "/adminIndex",
    name: "AdminIndex",
    mate: {
      title: "管理总台",
    },
    component: () => import("@/views/layout/Index.vue"),
    children: [
      {
        path: "/role",
        name: "Role",

        mate: {
          title: "角色管理",
        },
        component: () => import("@/views/admin/Role.vue"),
        // children: [
        //   {
        //     path: "/a",
        //     name: "A",

        //     mate: {
        //       title: "角色管理A",
        //     },
        //     component: () => import("@/views/admin/Role.vue"),
        //     children: [
        //       {
        //         path: "/a1",
        //         name: "A1",

        //         mate: {
        //           title: "角色管理Q1",
        //         },
        //         component: () => import("@/views/admin/Role.vue"),
        //       },
        //       {
        //         path: "/user",
        //         name: "User",
        //         mate: {
        //           title: "用户管理",
        //         },
        //         component: () => import("@/views/admin/User.vue"),
        //       },
        //     ],
        //   },
        //   {
        //     path: "/b",
        //     name: "B",
        //     mate: {
        //       title: "用户管理B",
        //     },
        //     component: () => import("@/views/admin/User.vue"),
        //   },
        // ],
      },
      {
        path: "/user",
        name: "User",
        mate: {
          title: "用户管理",
        },
        component: () => import("@/views/admin/User.vue"),
      },
    ],
  },
  {
    path: "/new",
    name: "New",
    mate: {
      title: "新闻",
    },
    component: () => import("@/views/layout/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
