import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProjectsSchool from '../views/ProjectsSchool.vue'
import ProjectsPersonal from '../views/ProjectsPersonal.vue'
import Amsterdam from '../views/Amsterdam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projectsSchool',
    name: 'School',
    component: ProjectsSchool
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projectsPersonal',
    name: 'Personal',
    component: ProjectsPersonal
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/amsterdam',
    name: 'Amsterdam',
    component: Amsterdam
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
