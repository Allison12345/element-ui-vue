<template lang="pug">
  el-menu-item-group
    template(slot='title') {{groupTitle}}
      menu-item(v-for='(item,index) in items' :key='index' v-bind='item' )
</template>
<script>
import { MenuItemGroup } from 'element-ui'
import { useComponents } from '@/utils/arr.js'
const componentList = [MenuItemGroup]
useComponents(componentList)
export default {
  name: 'menu-item-group',
  props: ['groupTitle', 'items']
}
</script>
