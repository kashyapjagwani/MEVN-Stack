import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/admin/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminMenu.vue')
  },
  {
    path: '/admin/menu/:id',
    name: 'ItemDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminMenuItem.vue')
  },
  {
    path: '/admin/add-item',
    name: 'AddItem',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminAddItem.vue')
  },
  {
    path: '/admin/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminOrders.vue')
  },
  {
    path: '/admin/orders/:id',
    name: 'OrderDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminOrderDetail.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
