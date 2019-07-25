<template>
  <Dropdown placement="right-start">
    <span class="drop-menu-span" :style="titleStyle">
      <Icon :type="parent.icon" :size="20" :color="iconColor"></Icon>
      <span v-if="showTitle">{{parent.title}}</span>
    </span>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-dropdown v-if="item.children" :key="`drop_${item.name}`" :parent="item"></re-dropdown>
        <DropdownItem v-else :key="`drop_${item.name}`" :name="item.name" placement="right">
          {{item.title}}
          <Icon :type="item.icon" :size="20" :color="iconColor"></Icon>
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
export default {
  name: 'ReDropdown',
  props: {
    parent: {
      type: Object,
      default: () => {
        return {}
      }
    },
    iconColor: {
      type: String,
      default: '#515a6e'
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    titleStyle () {
      return {
        textAlign: this.showTitle ? 'left' : 'center'
      }
    }
  }
}
</script>
<style lang="scss">
.drop-menu-span {
  display: block;
  width: 100%;
  text-align: center;
  padding: 5px 0;
}
</style>
