import { login, authorization } from "@/api/user";
import { setToken } from "@/lib/uilt";
const state = {
  //
};
const mutations = {
  //
};
const actions = {
  /**
   * @description: 登录
   */
  login({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      })
        .then(res => {
          console.log(res, "login1");
          if (parseInt(res.data.code) === 200) {
            setToken(res.data.token);
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => {
          console.log(error, "login");
          reject(error);
        });
    });
  },
  /**
   * @description: 验证token
   */
  authorization({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization()
        .then(res => {
          if (parseInt(res.code) === 401) {
            reject(new Error("token error"));
          } else {
            //从新设置token到cookie延续有效期
            setToken(res.data.token);
            resolve();
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  /**
   * @description: 退出登录清除token
   */
  logout(){
    setToken('')
  }
};
export default {
  state,
  mutations,
  actions
};
