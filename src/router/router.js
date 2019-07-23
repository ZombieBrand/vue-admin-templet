export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "",
    name: "layout",
    component: () => import("@/views/Layout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue")
      },
      {
        name: "404",
        path: "/404",
        component: () => import("@/views/404.vue")
      }
    ]
  }
];
