<template lang="pug">
  el-table(:data='tableData')
    el-table-column(prop="date" label="日期" width="140")
    el-table-column(prop="name" label="姓名" width="120")
    el-table-column(prop="address" label="地址")
</template>
<script>
import { Table, TableColumn } from 'element-ui'
import { useComponents } from '@/utils/arr'
const componentList = [Table, TableColumn]
useComponents(componentList)
export default {
  name: 'my-table',
  props: ['tableData']
}
</script>
