<template>
  <div>
    <slot></slot>
    <Menu>
      <menu-item></menu-item>
    </Menu>
    <div></div>
  </div>
</template>
<script>
export default {
  name:'SideMenu',
  props:{
    collapsed:{
      type:Boolean,
      default:false
    }
  }
}
</script>
<style>
  
</style>
