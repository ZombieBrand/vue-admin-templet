<template>
    <div class="side-menu-wrapper">
        <slot></slot>
        <Menu @on-select="handelSelect" theme="dark" v-show="!collapsed" width="auto">
            <template v-for="item in list">
                <re-submenu
                        :key="`menu_${item.name}`"
                        :name="item.name"
                        :parent="item"
                        v-if="item.children"
                ></re-submenu>
                <menu-item :key="`menu_${item.name}`" :name="item.name" v-else>
                    <Icon :type="item.icon"/>
                    {{item.name}}
                </menu-item>
            </template>
        </Menu>
        <div class="drop-wrapper" v-show="collapsed">
            <template v-for="item in list">
                <re-dropdown
                        icon-color="#fff"
                        :key="`drop_${item.name}`"
                        :parent="item"
                        :show-title="false"
                        @on-select="handelSelect"
                        v-if="item.children"
                ></re-dropdown>
                <Tooltip :content="item.title" :key="`drop_${item.name}`" placement="right" v-else>
                    <span @click="handelClick(item.name)" class="drop-menu-span">
                        <Icon color="#fff" :size="20" :type="item.icon"></Icon>
                    </span>
                </Tooltip>
            </template>
        </div>
    </div>
</template>
<script>
  import ReSubmenu from './Re-submenu.vue'
  import ReDropdown from './Re-dropdown.vue'

  export default {
    name: 'SideMenu',
    data () {
      return {
        iconColor: '#fff'
      }
    },
    props: {
      collapsed: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    methods: {
      handelClick (name) {
        console.log(name)
      },
      handelSelect (name) {
        console.log(name)
      }
    },
    components: {
      ReSubmenu,
      ReDropdown
    }
  }
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
