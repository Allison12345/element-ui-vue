<template lang="pug">
  el-container.outside
    el-aside
      el-menu(:default-openeds="['1', '3']")
        submenu(v-for="(item,index) in submenuList" :key='index' v-bind='item')
    el-container
      el-header.header
        dropdown(v-for='(item,key) in DropdownList' :key='key' v-bind='item')
        span {{name}}
      el-main
        my-table(:tableData='tableData')
</template>
<script>
import { submenuList, DropdownList, tableData } from './container'
import { useComponents } from '@/utils/arr'
import { Container, Header, Aside, Main, Footer, Menu } from 'element-ui'
const componentList = [Container, Header, Aside, Main, Footer, Menu]
useComponents(componentList)
export default {
  name: 'container',
  data() {
    return {
      submenuList,
      DropdownList,
      name: '吴川平',
      tableData
    }
  }
}
</script>
<style lang="less">
.outside {
  height: 800px;
  border: 1px solid #eee;
  el-aside {
    width: '200px';
    color: #333;
    background-color: rgb(238, 241, 246);
  }
  .header {
    text-align: right;
    font-size: 12px;
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }
  el-aside {
    color: #333;
  }
}
</style>
