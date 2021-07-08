<template>
  <div class="loading">
    <img src="~@/assets/imgs/loading-svg/loading-bubbles.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang='scss'>
.loading {
  height: 80px;
  line-height: 80px;
  text-align: center;
  padding: 30px 0;
  img {
    height: 100%;
  }
}
</style>
