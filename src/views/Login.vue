<!--
 * @Description:登录页 
 * @Author: cheyongzhi
 * @Date: 2019-07-12 17:22:56
 * @LastEditTime: 2019-07-23 15:51:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="wrap">
    <div class="container">
      <div class="title">
        <div class="brand">后台管理平台</div>
        <div class="subtitle">请登录继续</div>
      </div>
      <div class="form">
        <div class="row username">
          <div class="input-group" id="username">
            <Icon type="ios-contact-outline" size="23" />
            <input type="text" placeholder="请输入用户名" v-model="userName" />
          </div>
        </div>
        <div class="row password">
          <div class="input-group">
            <Icon type="ios-unlock-outline" size="23" />
            <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
        </div>
        <div class="row">
          <button @click="handleSubmit">登录</button>
        </div>
      </div>
      <div class="row">
        <div class="singup">
          没有帐户？
          <a target="_blank" href="#">申请注册</a>
        </div>
      </div>
    </div>
    <video
      v-show="videoEnd"
      ref="video"
      @ended="videoSwitch"
      muted
      class="background-video"
      autoplay="autoplay"
      name="media"
      preload="auto"
      src="@/assets/video/background-video-start.mp4"
    ></video>
    <video
      v-show="videoEnd?false:true"
      @ended="videoSwitch"
      muted
      loop="loop"
      class="background-video"
      autoplay="autoplay"
      name="media"
      preload="auto"
      src="@/assets/video/background-video-loop.mp4"
    ></video>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { setInterval } from "timers";
export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: "",
      videoEnd: true
    };
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    /**
     * @description: 映射sotre.actions方法
     * @return: login异步请求处理
     */
    ...mapActions(["login"]),
    /**
     * @description: 发送登录请求
     * @param {用户名,密码}
     * @return: 用户信息,token
     */
    handleSubmit() {
      this.login({
        userName: this.userName,
        password: this.password
      })
        .then(() => {
          this.$router.push({
            name: "home"
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    /**
     * @description:视频播放结束切换播放
     */
    videoSwitch() {
      this.videoEnd = false;
    }
  }
};
</script>
<style scoped>
.background-video {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
.wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  font-family: "Mukta", sans-serif;
}
a {
  text-decoration: none;
  color: #444;
}
.title {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 25px;
}
.subtitle {
  font-weight: 300;
  color: #444;
}
.brand {
  color: #1d5cf9;
  letter-spacing: 10px;
  font-size: 22px;
  font-weight: 700;
  padding-left: 8px;
}
.container {
  width: 320px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 25px;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
}

.container::after {
  content: "";
  width: 90%;
  left: 5%;
  bottom: 0px;
  height: 25px;
  z-index: -1;
  background-color: transparent;
  position: absolute;
  box-shadow: 0 10px 90px #add6f9;
}

form {
  margin-top: 60px;
}

.row {
  width: 100%;
}

.input-group {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-group i {
  border: 1px solid #eee;
  border-right: none;
  padding: 10px;
  color: #ddd;
  background-color: #fff;
}
.row.password {
  margin-top: 10px;
}
.row input {
  height: 45px;
  width: 100%;
  font-size: 14px;
  border: 1px solid #eee;
  border-left: none;
  color: #000;
}

.row input:focus {
  outline: none;
}

button {
  width: 50%;
  background-color: #1d5cf9;
  color: #fff;
  padding: 13px;
  font-size: 14px;
  border-radius: 100px;
  border: none;
  position: relative;
  left: 25%;
  box-shadow: 0 15px 40px #add6f9;
  margin: 50px 0 0 0;
  cursor: pointer;
  font-weight: bold;
}
button:focus {
  outline: none;
}

button svg {
  position: absolute;
  top: 8px;
  width: 15px;
  margin-left: 10px;
}

.forgotpassword {
  text-align: center;
  margin-top: 35px;
}
.singup {
  margin-top: 50px;
  text-align: center;
  color: #444;
  font-size: 14px;
}
.singup a {
  color: #1d5cf9;
  font-weight: 600;
}
</style>

