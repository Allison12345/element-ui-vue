<template lang="pug">
  el-select(v-model='value'  placeholder="请选择" @change='onSelectChange')
    el-option(v-for='(item,key) in selectList' :key='key'
     :label='item.label' :value='item.num') 
</template>
<script>
import { Select, Option } from 'element-ui'
import { useComponents } from '@/utils/arr'
const componentList = [Select, Option]
useComponents(componentList)
export default {
  name: 'my-select',
  props: ['selectList'],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSelectChange(index) {
      this.value = this.selectList[index].label
    }
  }
}
</script>
