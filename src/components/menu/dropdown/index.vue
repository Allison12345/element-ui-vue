<template lang="pug">
  el-dropdown
    i(:class='`${iconClass}`')
      el-dropdown-menu(slot='dropdown')
        el-dropdown-item(v-for='(item,index) in dropdownItems' :key='index' v-bind='item') {{item}}
</template>
<script>
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import { useComponents } from '@/utils/arr'
const componentList = [Dropdown, DropdownMenu, DropdownItem]
useComponents(componentList)
export default {
  name: 'dropdown',
  props: ['iconClass', 'dropdownItems']
}
</script>
<style lang="less">
i {
  margin-right: 15px;
}
</style>
