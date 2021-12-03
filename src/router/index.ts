import { createRouter, createWebHistory } from 'vue-router'
import { baseRoutes } from './routes'
export default createRouter({
  history: createWebHistory(),
  routes: baseRoutes
})