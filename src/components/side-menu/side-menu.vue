<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu width="auto" theme="dark">
      <template v-for="item in list">
        <re-submenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :name="item.name"
          :parent="item"
        ></re-submenu>
        <MenuItem v-else :key="`menu_${item.name}`" :name="item.name">{{item.name}}</MenuItem>
      </template>
    </Menu>
    <div class="drop-wrapper" v-show="collapsed">
      <template v-for="item in list">
        <re-dropdown
          v-if="item.children"
          :key="item.name"
          :parent="item"
          icon-color="#fff"
          :show-title="false"
        ></re-dropdown>
        <Tooltip v-else :content="item.title" :key="`drop_${item.name}`" placement="right">
          <span class="drop-menu-span">
            <Icon :type="item.icon" :size="20" :color="'#fff'"></Icon>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>
<script>
import ReSubmenu from "./Re-submenu.vue";
import ReDropdown from "./Re-dropdown.vue";
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
    ReSubmenu,
    ReDropdown
  }
};
</script>
<style lang="scss">
.side-menu-wrapper {
  width: 100%;
  .ivu-tooltip,
  .drop-menu-span {
    display: block;
    width: 100%;
    text-align: center;
    padding: 5px 0;
  }
  .drop-wrapper > .ivu-dropdown {
    display: block;
    padding: 5px;
    margin: 0 auto;
  }
}
</style>
