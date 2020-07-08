<template lang="pug">
.icon
  img(:src='img')
</template>

<script>
export default {
  name: 'icon',
  props: ['img']
}
</script>

<style lang="less">
.icon {
  width: 24px;
  height: 24px;
  background-size: cover;
}
</style>
