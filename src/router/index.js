import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemPicker from '@/components/ItemPicker.vue'
import HomeScreen from '@/components/HomeScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/item',
    name: 'ItemPicker',
    component: ItemPicker
  },
  {
    path: '/',
    name: 'HomeScreen',
    component: HomeScreen
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
