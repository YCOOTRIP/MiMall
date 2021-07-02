<template>
  <div>
    <order-header :title="title">
      <template #tip>
        <span>{{ tip }}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import OrderHeader from '@/components/OrderHeader'
import ServiceBar from '../components/ServiceBar.vue'
export default {
  name: 'order',
  components: { NavFooter, OrderHeader, ServiceBar },
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  mounted () {
    const path = this.$route.path
    switch (path) {
      case '/order/confirm':
        this.title = '订单确认'
        this.tip = '请认真填写收货地址'
        break
      case '/order/list':
        this.title = '订单列表'
        this.tip = '请谨防钓鱼链接或诈骗电话,了解更多>'
        break
      case '/order/pay':
        this.title = '订单支付'
        this.tip = '请谨防钓鱼链接或诈骗电话,了解更多>'
        break
    }
  }
}
</script>

<style scoped></style>
