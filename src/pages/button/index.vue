<template lang="pug">
  page
    el-row
      el-button 默认按钮
      el-button(type="primary") 主要按钮
      el-button(type="success") 成功按钮
      el-button(type="info") 信息按钮
      el-button(type="warning") 警告按钮
      el-button(type="danger") 危险按钮
    el-row
      el-button 朴素按钮
      el-button(type="primary" plain) 主要按钮
      el-button(type="success" plain) 成功按钮
      el-button(type="info" plain) 信息按钮
      el-button(type="warning" round) 警告按钮
      el-button(type="danger" round) 危险按钮
    el-row
      el-button(icon="el-icon-search" circle)
      el-button(type="primary" icon="el-icon-edit" circle)
      el-button(type="success"  icon="el-icon-check" circle)
      el-button(type="info"  icon="el-icon-message" circle)
      el-button(type="warning" icon="el-icon-star-off" circle)
      el-button(type="danger" icon="el-icon-delete" circle)
    el-row
      el-button(type='text') 文字按钮
      el-button(type='text' disabled) 文字按钮
    el-row
      el-button(type="primary" icon="el-icon-search") 搜索
      el-button(type="primary") 上传
        i.el-icon-upload.el-icon--right 
    el-button-group
      el-button(type="primary" icon="el-icon-arrow-left" ) 上一页
      el-button(type="primary" ) 下一页
        i.el-icon-arrow-right.el-icon--right 
</template>
<script>
import Vue from 'vue'
import { Button, Row, Col } from 'element-ui'
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
export default {
  name: 'my-button'
}
</script>
