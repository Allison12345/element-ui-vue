<template lang="pug">
  .home-pane
    .home-pane__hd.bg-white.flex-r-sb(@click='onIndexChange(index)')
      .home-pane__hd-label {{label}}
      .home-pane__hd-icon
        i.el-icon-arrow-up(v-if='isOpen')
        i.el-icon-arrow-down(v-else)
    .home-pane__bd(v-if='isOpen')
      cell(v-for='(item,index) in items' :key='index' v-bind='item')
</template>
<script>
export default {
  name: 'home-pane',
  props: ['label', 'index', 'items', 'isOpen'],
  data() {
    return {}
  },
  methods: {
    onIndexChange(index) {
      this.$emit('changeIndex', index)
    }
  }
}
</script>
<style lang="less">
.home-pane {
  margin: 10px;
  .home-pane__hd {
    padding: 10px;
  }
}
</style>
