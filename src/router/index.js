import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InstalacionesOficiales from '../views/InstalacionesOficiales.vue'
import InstalacionesNoOficiales from '../views/InstalacionesNoOficiales.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/instalacionesOficiales',
    name: 'InstalacionesOficiales',
    component: InstalacionesOficiales
  },
  {
    path: '/instalacionesNoOficiales',
    name: 'InstalacionesNoOficiales',
    component: InstalacionesNoOficiales
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
