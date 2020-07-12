<template lang="pug">
page
  el-select(v-model='value' multiple  placeholder="请选择" )
    el-option(v-for='(item,key) in selectList' :key='key'
     :label='item.label' :value='item.value') 
  el-select(v-model='optionValue' placeholder='请选择' filterable)
    el-option-group(v-for='(i,index) in options' v-bind='i' :key='index')
      el-option(v-for='(j,key) in i.options' v-bind='j' :key='key')
</template>
<script>
import { Select, Option, OptionGroup } from 'element-ui'
import { useComponents } from '@/utils/arr'
const componentList = [Select, Option, OptionGroup]
useComponents(componentList)
export default {
  name: 'select',
  data() {
    return {
      value: [],
      selectList: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      options: [
        {
          label: '热门城市',
          options: [
            {
              value: 'Shanghai',
              label: '上海'
            },
            {
              value: 'Beijing',
              label: '北京'
            }
          ]
        },
        {
          label: '城市名',
          options: [
            {
              value: 'Chengdu',
              label: '成都'
            },
            {
              value: 'Shenzhen',
              label: '深圳'
            },
            {
              value: 'Guangzhou',
              label: '广州'
            },
            {
              value: 'Dalian',
              label: '大连'
            }
          ]
        }
      ],
      optionValue: ''
    }
  },
  methods: {
    onSelectChange(index) {
      this.value = this.selectList[index].label
    }
  }
}
</script>
