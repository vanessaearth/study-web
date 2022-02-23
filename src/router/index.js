import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Drag = () => import(/* webpackChunkName: "about" */ '../views/drag/drag.vue')
const Drag2 = () => import(/* webpackChunkName: "about" */ '../views/drag/drag2.vue')
const DragLeft = () => import(/* webpackChunkName: "about" */ '../views/drag/moveleftright.vue')
const DragLeft2 = () => import(/* webpackChunkName: "about" */ '../views/drag/moveleft2.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/drag',
    name: 'drag',
    component: Drag
  }, {
    path: '/drag2',
    name: 'drag2',
    component: Drag2
  },
  {
    path: '/drag-left',
    name: 'dragleft',
    component: DragLeft
  },
  {
    path: '/drag-left',
    name: 'dragleft2',
    component: DragLeft2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
