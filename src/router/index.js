import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('@/pages/home')
const Index = () => import('@/pages/index')
const Product = () => import('@/pages/product')
const Detail = () => import('@/pages/detail')
const Cart = () => import('@/pages/cart')
const Order = () => import('@/pages/order')
const OrderConfirm = () => import('@/pages/orderConfirm')
const OrderList = () => import('@/pages/orderList')
const OrderPay = () => import('@/pages/orderPay')
const Login = () => import('@/pages/login')
const Alipay = () => import('@/pages/alipay')
const Register = () => import('@/pages/register')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      { path: '/index', name: 'index', component: Index },
      { path: '/detail/:id', name: 'detail', component: Detail },
      { path: '/product/:id', name: 'product', component: Product }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      { path: 'list', name: 'order-list', component: OrderList },
      { path: 'confirm', name: 'order-confirm', component: OrderConfirm },
      { path: 'pay', name: 'order-pay', component: OrderPay },
      { path: 'alipay', name: 'alipay', component: Alipay }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
