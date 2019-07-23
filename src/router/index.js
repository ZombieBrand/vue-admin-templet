import Vue from "vue";
import Router from "vue-router";
import routes from "./router";
import store from "@/store";
import { setTitle, getToken, setToken } from "@/lib/uilt";
import { TabPane } from "iview";
import { Hash } from "crypto";
Vue.use(Router);

const router = new Router({
  mode:'hash',
  routes
});
//判断用户是否已经登录这个值应当是后台获取
router.beforeEach((to, from, next) => {
  // 修改页面title
  to.meta && setTitle(to.meta.title);
  let token = getToken();
  if (token) {
    console.log(token, "token");
    store
      .dispatch("authorization", token)
      .then(() => {
        console.log(to.name, "authorization");
        if (to.name === "login") {
          console.log(to.name,'login')
          next({ name: "home" });
        } else {
          console.log('进入home');
          next();
        }
      })
      .catch(() => {
        setToken("");
        next({ name: "login" });
      });
  } else {
    if (to.name === "login") next();
    else next({ name: "login" });
  }
});
export default router;
