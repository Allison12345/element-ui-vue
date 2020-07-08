<template lang="pug">
div(@click='onRouteChage(path)')
  .cell.flex-r-sb.bg-white
    .cell__hd {{label}}
    .cell__bd
      i.el-icon-arrow-right
</template>

<script>
export default {
  name: 'cell',
  props: ['label', 'path'],
  methods: {
    onRouteChage(path) {
      this.$router.push(`/${path}`)
    }
  }
}
</script>
<style lang="less">
.cell {
  padding: 10px;
  margin-top: 5px;
  .cell__bd {
    width: 24px;
    height: 24px;
  }
}
</style>
