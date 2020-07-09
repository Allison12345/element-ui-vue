<template lang="pug">
  el-menu-item(:index='`${itemIndex}`') {{label}}
</template>
<script>
import { MenuItem } from 'element-ui'
import { useComponents } from '@/utils/arr'
const componentList = [MenuItem]
useComponents(componentList)
export default {
  name: 'menu-item',
  props: ['itemIndex', 'label']
}
</script>
