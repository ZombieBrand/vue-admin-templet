<!--
 * @Description: In User Settings Edit
 * @Author: cheyongzhi
 * @Date: 2019-07-10 16:36:56
 * @LastEditTime: 2019-07-23 11:44:40
 * @LastEditors: Please set LastEditors
 -->
<template>
  <Card :bordered="false">
    <p slot="title">No border title</p>
    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type.</p>
  </Card>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  created () {},
  data () {
    return {}
  },
  methods: {
    // //进入组件但是未渲染前守卫导航
    // beforeRouteEnter(to, from, next) {
    //   //犹豫组件挂载渲染所以这里无法this获取组件可以通过vm拿到
    //   next(vm => {
    //     console.log(vm);
    //   });
    // },
    // //将要离开组件时触发,主要场景时提醒用户是否真的要离开这个页面
    // beforeRouteLeave(to, from, next) {
    //   const leave = confirm("您确定要离开吗?");
    //   if (leave) {
    //     next();
    //   } else {
    //     next(false);
    //   }
    // }
  }
}
</script>
