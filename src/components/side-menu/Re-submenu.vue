<template>
  <Submenu :name=parent.name>
    <template slot="title">
      <Icon :type="parent.icon"></Icon>
      {{parent.title}}
      <template v-for="item in list">
        <re-submenu
          v-if="parent.children"
          :key="`menu_${item.name}`"
          :name="item.name"
          :parent="item"
        ></re-submenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">{{item.name}}</menu-item>
      </template>
    </template>
  </Submenu>
</template>
<script>
export default {
  name: "ReSubmenu",
  props: {
    parent: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
<style scoped>
</style>
