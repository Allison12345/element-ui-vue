<template lang="pug">
  el-input-number(v-model='num' @change="handleChange" :min="1" :max="10" :step='2' :precision='2')
</template>
<script>
import { InputNumber } from 'element-ui'
import { useComponents } from '@/utils/arr'
const componentList = [InputNumber]
useComponents(componentList)
export default {
  name: 'input-number',
  data() {
    return {
      num: '1'
    }
  },
  methods: {
    handleChange(e) {
      console.log(e)
    }
  }
}
</script>
