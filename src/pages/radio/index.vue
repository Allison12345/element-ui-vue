<template lang="pug">
page
  el-radio(v-model="radio1" label="1") 备选项
  el-radio(v-model="radio1" label="2") 备选项
  el-radio(v-model="radio1" disabled label="1") 备选项
  el-radio-group(v-model="radio3")
    el-radio( :label="3") 备选项
    el-radio( :label="4") 备选项
    el-radio( :label="5") 备选项
  el-radio-group(v-model="radio2" size='medium')
    el-radio-button(label="sdkjf")
    el-radio-button(label="4dsf")
    el-radio-button(label="5sda")
  el-radio-group(v-model="radio3" )
    el-radio( label="3" border) 备选项
    el-radio( label="4" border) 备选项
</template>
<script>
import { Radio, RadioGroup, RadioButton } from 'element-ui'
import { useComponents } from '@/utils/arr'
const componentList = [Radio, RadioGroup, RadioButton]
useComponents(componentList)
export default {
  name: 'my-radio',
  data() {
    return {
      radio1: '1',
      radio3: '3',
      radio2: '5sda'
    }
  }
}
</script>
