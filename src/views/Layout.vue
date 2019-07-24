<!--
 * @Description: In User Settings Edit
 * @Author: cheyongzhi
 * @Date: 2019-07-10 16:36:56
 * @LastEditTime: 2019-07-24 14:21:01
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="layout">
    <Layout style="height:100%">
      <Sider
        ref="side1"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
        breakpoint="md"
      >
        <side-menu :collapsed="isCollapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon
            class="collap"
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
        </Header>
        <Content :style="{margin: '20px', minHeight: '260px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SideMenu from "@/components/side-menu";
import { mapActions } from "vuex";
// @ is an alias to /src
export default {
  name: "layout",
  data() {
    return {
      isCollapsed: false,
      menuList: [
        {
          title: "首页",
          name:'home',
          icon: "ios-home"
        },
        {
          title: "人事",
          name:'personnel',
          icon: "ios-home",
          children: [
            {
              title: "招聘",
              name:'recruitment',
              icon: "ios-home"
            },
            {
              title: "薪酬",
              name:'wages',
              icon: "ios-home",
              children:[{
                title:'调薪',
                name:'addWages',
                icon:"ios-home"
              }]
            }
          ]
        }
      ]
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    //@description: 映射vuex>actions>logout
    ...mapActions(["logout"]),
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    //@description: 退出登录
    handleLogout() {
      this.logout();
      this.$router.push({ name: "login" });
    }
  },
  components: {
    SideMenu
  }
};
</script>
 <style scoped>
.layout {
  height: 100%;
  width:100%;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.collap {
  cursor: pointer;
}
</style> 