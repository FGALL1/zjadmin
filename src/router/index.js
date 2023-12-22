import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../views/Header.vue'
import Aside from '../views/Aside.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'header',
  //   component: Header
  // },
  // {
  //   path: '/',
  //   name: 'aside',
  //   component:Aside
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //
  // }
]

const router = new VueRouter({
  routes
})

export default router
