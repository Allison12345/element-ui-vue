<template lang="pug">
  el-submenu(:index='groupIndex')
    template(slot="title")
      i(:class='{iconClass}') {{menuTitle}}
    menu-item-group(v-for='(item,index) in itemGroup' :key='index' v-bind='item')
</template>
<script>
import { Submenu } from 'element-ui'
import { useComponents } from '@/utils/arr.js'
const componentList = [Submenu]
useComponents(componentList)
export default {
  name: 'submenu',
  props: ['groupIndex', 'iconClass', 'menuTitle', 'itemGroup']
}
</script>
