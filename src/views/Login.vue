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
                    <div class="input-group"
                         id="username">
                        <Icon size="23" type="ios-contact-outline"/>
                        <input @blur="regPhone" placeholder="请输入用户名" type="text" v-model="userInfo.userName"/>
                    </div>
                    <span class="rule" v-show="ruleInline.correctPhone">请输入11位手机号</span>
                </div>
                <div class="row password">
                    <div  class="input-group"
                         id="password">
                        <Icon size="23" type="ios-unlock-outline"/>
                        <input @blur="regPw" placeholder="请输入密码" type="password" v-model="userInfo.password"/>
                    </div>
                    <span class="rule" v-show="ruleInline.correctPw">请输入6-12位含有数字和字母的密码</span>
                </div>
                <div class="row">
                    <button @click="handleSubmit">登录</button>
                </div>
            </div>
            <div class="row keep-key-wrap">
                <Checkbox v-model="keepKey">记住密码</Checkbox>
            </div>
            <div class="row">
                <div class="singup">
                    <a href="#" target="_blank">找回密码</a>
                    <a class="newsing-in" href="#" target="_blank">新企业注册</a>
                </div>
            </div>
        </div>
        <video
                @ended="videoSwitch"
                autoplay="autoplay"
                class="background-video"
                muted
                name="media"
                preload="auto"
                ref="video"
                src="@/assets/video/background-video-start.mp4"
                v-show="videoEnd"
        ></video>
        <video
                @ended="videoSwitch"
                autoplay="autoplay"
                class="background-video"
                loop="loop"
                muted
                name="media"
                preload="auto"
                src="@/assets/video/background-video-loop.mp4"
                v-show="videoEnd?false:true"
        ></video>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'login',
    data () {
      return {
        userInfo: {
          userName: '',
          password: '',
        },
        videoEnd: true,
        keepKey: false,
        ruleInline: {
          correctPhone: false,
          correctPw: false
        }
      }
    },
    mounted () {
      //判断是否需要默认填写账户名密码
      this.defaultKey()
    },
    methods: {
      /**
       * @description: 映射sotre.actions方法
       * @return: login异步请求处理
       */
      ...mapActions(['login']),
      /**
       * @description: 发送登录请求
       * @param {用户名,密码}
       * @return: 用户信息,token
       */
      handleSubmit () {
        this.login({
          userName: this.userInfo.userName,
          password: this.userInfo.password
        })
          .then(() => {
            this.keep()
            this.$router.push({
              name: 'home'
            })
          })
          .catch(error => {
            console.log(error)
          })
      },
      /**
       * @description:视频播放结束切换播放
       */
      videoSwitch () {
        this.videoEnd = false
      },
      /**
       * @description: 记住密码功能
       * @author:cheyongzhi
       * @date: 2019-07-25
       */
      keep () {
        if (this.keepKey) {
          let userInfo = JSON.stringify(this.userInfo)
          localStorage.setItem('keepKey', userInfo)
        } else {
          localStorage.removeItem('keepKey')
        }
      },
      defaultKey () {
        let userInfo = JSON.parse(localStorage.getItem('keepKey'))
        if (userInfo) {
          this.userInfo.userName = userInfo.userName
          this.userInfo.password = userInfo.password
          this.keepKey = true
        }
      },
      /**
       * @description: 校验
       * @author:cheyongzhi
       * @date: 2019-07-25
       */
      regPhone () {
        let regexPhone = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/)
        this.ruleInline.correctPhone = !regexPhone.test(this.userInfo.userName)
      },
      regPw () {
        let regexPw = new RegExp(/^(?=.*\d)(?=.*[a-z]).{6,12}$/)
        this.ruleInline.correctPw = !regexPw.test(this.userInfo.password)
      }
    }
  }
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
        margin-top: 20px;
    }
    .username,.password{
        position: relative;
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
        margin: 35px 0 0 0;
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

    .singup {
        margin-top: 30px;
        text-align: center;
        color: #444;
        font-size: 14px;
    }

    .singup a {
        color: #1d5cf9;
        font-weight: 600;
    }

    .newsing-in {
        margin-left: 20px;
    }

    .keep-key-wrap {
        text-align: center;
        margin-top: 30px;
    }

    .rule {
        position:absolute;
        top:45px;
        left:10px;
        color: red;
    }
</style>

