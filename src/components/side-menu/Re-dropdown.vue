<template>
    <Dropdown @on-click="handleClick" class="drop-wrap" placement="right-start">
    <span :style="titleStyle" class="drop-menu-span">
      <Icon :color="iconColor" :size="20" :type="parent.icon"></Icon>
      <span :style="styleTitle" v-if="showTitle">{{parent.title}}</span>
    </span>
        <DropdownMenu slot="list">
            <template v-for="item in parent.children">
                <re-dropdown :key="`drop_${item.name}`" :parent="item" v-if="item.children"></re-dropdown>
                <DropdownItem :key="`drop_${item.name}`" :name="item.name" class="drop-wrap" v-else>
                    <Icon :size="20" :type="item.icon" color="#515a6e"/>
                    <span :style="styleTitle">{{item.title}}</span>
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
      },

    },
    computed: {
      titleStyle () {
        return {
          textAlign: this.showTitle ? 'left' : 'center',
          paddingLeft: this.showTitle ? '16px' : '',
        }
      },
      styleTitle () {
        return {
          padding: `4px`,
          verticalAlign: 'middle',
          fontSize: `13px`
        }
      }
    },
    methods: {
      handleClick (name) {
        if (!this.showTitle) {
          this.$emit('on-select', name)
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

    .drop-wrap {
    }
</style>
