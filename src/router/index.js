import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProjectsSchool from '../views/ProjectsSchool.vue'
import ProjectsPersonal from '../views/ProjectsPersonal.vue'
import Design from '../views/Design.vue'
import Amsterdam from '../views/Amsterdam.vue'
import ProjectVolarvis from '../views/ProjectVolarvis.vue'
import ProjectKuler from '../views/ProjectKuler.vue'
import ProjectCharichain from '../views/ProjectCharichain.vue'

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
    path: '/design',
    name: 'Design',
    component: Design
  },
  {
    path: '/amsterdam',
    name: 'Amsterdam',
    component: Amsterdam
  },
  {
    path: '/projectVolarvis',
    name: 'Volarvis',
    component: ProjectVolarvis
  },
  {
    path: '/projectKuler',
    name: 'Kuler',
    component: ProjectKuler
  },
  {
    path: '/projectCharichain',
    name: 'Project Charichain',
    component: ProjectCharichain
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
