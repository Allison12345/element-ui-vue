<template lang="pug">
  el-submenu(:index='`${groupIndex}`' )
    template(slot="title")
      i(:class='`${iconClass}`') {{menuTitle}}
    menu-item-group(v-if='itemGroup' v-for='(item,index) in itemGroup' :key='index' v-bind='item')
    submenu(v-if='submenuGroup' v-for='(item,index) in submenuGroup' :key='index' v-bind='item')
</template>
<script>
import { Submenu } from 'element-ui'
import { useComponents } from '@/utils/arr.js'
const componentList = [Submenu]
useComponents(componentList)
export default {
  name: 'submenu',
  props: ['groupIndex', 'iconClass', 'menuTitle', 'itemGroup', 'submenuGroup'],
  created() {
    console.log(this.iconClass)
  }
}
</script>
