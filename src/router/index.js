import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryView from '../views/CountryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/pays/:name',
    name: 'CountryView',
    component: CountryView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
