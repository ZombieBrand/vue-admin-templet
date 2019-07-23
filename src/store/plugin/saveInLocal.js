/*
 * @Description:vuex持久化解决方法 
 * @Author: cheyongzhi
 * @Date: 2019-07-16 10:32:29
 * @LastEditTime: 2019-07-19 16:51:04
 * @LastEditors: Please set LastEditors
 */

export default store => {
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state))
  }
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state)
  })
}