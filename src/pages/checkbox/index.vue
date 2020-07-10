<template lang="pug">
  page
    el-checkbox( v-model="checkAll" @change="chageAll") 全选
    el-checkbox-group(v-model='checkedCities' @change="cityChange")
      el-checkbox(v-for="(city,index) in cityOptions" :label="city" :key="index") {{city}}
    //- el-checkbox-group(v-model='checkedCities' :max='2' :min="1")
    //-   el-checkbox(v-for="(city,index) in cityOptions" :label="city" :key="index") {{}}
</template>
<script>
import { Checkbox, CheckboxGroup, CheckboxButton } from 'element-ui'
import { useComponents } from '@/utils/arr'
const componentList = [Checkbox, CheckboxGroup, CheckboxButton]
useComponents(componentList)

const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'checkbox',
  data() {
    return {
      cityOptions,
      checkAll: false,
      checkedCities: ['上海', '北京']
    }
  },
  methods: {
    chageAll() {
      if (this.checkAll === true) {
        this.checkedCities = cityOptions
      } else {
        this.checkAll = false
        this.checkedCities = []
      }
    },
    cityChange(val) {
      if (val.length === cityOptions.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
    }
  }
}
</script>
