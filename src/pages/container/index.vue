<template lang="pug">
  page
    el-container
      el-aside
        el-menu(:default-openeds="['1', '3']")
          el-submenu(v-for="(item,index) in submenuList" :key='index' v-bind='item')
</template>
<script>
import { useComponents } from '@/utils/arr.js'
import { container, Header, Aside, Main, Footer, Menu } from 'element-ui'
const componentList = [container, Header, Aside, Main, Footer, Menu]
useComponents(componentList)
export default {
  name: 'container',
  data() {
    return {
      submenuList: [
        {
          groupIndex: 1,
          iconClass: 'el-icon-message',
          menuTitle: '导航一',
          itemGroup: [
            {
              groupTitle: '分组一',
              items: [
                { itemIndex: '1-1', label: '选项1' },
                { itemIndex: '1-2', label: '选项2' }
              ]
            },
            {
              groupTitle: '分组二',
              items: [{ itemIndex: '1-1', label: '选项3' }]
            }
          ]
        },
        {
          groupIndex: 2,
          iconClass: 'el-icon-menu',
          menuTitle: '导航二',
          itemGroup: {
            groupTitle: '分组er',
            items: [
              { itemIndex: '1-2', label: '选项1' },
              { itemIndex: '1-2', label: '选项2' }
            ]
          }
        },
        {
          groupIndex: 3,
          iconClass: 'el-icon-setting',
          menuTitle: '导航三',
          itemGroup: {
            groupTitle: '分组三',
            items: [
              { itemIndex: '1-3', label: '选项1' },
              { itemIndex: '1-2', label: '选项2' }
            ]
          }
        }
      ]
    }
  }
}
</script>
<style lang="less">
el-container {
  height: 500px;
  border: 1px solid #eee;
  el-aside {
    width: '200px';
    color: #333;
    background-color: rgb(238, 241, 246);
  }
}
</style>
