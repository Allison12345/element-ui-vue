<template lang="pug">
  page
    el-row(:gutter="20")
      el-col.grid-content(:span='12')
        div.bg-purple
      el-col.grid-content(:span='12')
        div.bg-purple
</template>

<script>
import Vue from 'vue'
import { Row, Col } from 'element-ui'
Vue.use(Row)
Vue.use(Col)
export default {
  name: 'layout'
}
</script>
<style lang="less">
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  min-height: 36px;
}
</style>
