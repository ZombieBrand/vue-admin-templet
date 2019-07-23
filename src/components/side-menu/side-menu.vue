<template>
  <div>
    <slot></slot>
    <Menu width="auto" theme="dark">
      <template v-for="item in list">
        <re-submenu v-if="item.children" :key="`menu_${item.name}`" :name="item.name" :parent="item"></re-submenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">{{item.name}}</menu-item>
      </template>
    </Menu>
    <div></div>
  </div>
</template>
<script>
import ReSubmenu from "./Re-submenu.vue";

export default {
  name: "SideMenu",
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    ReSubmenu
  }
};
</script>
<style>
</style>
