import { createRouter, createWebHistory } from 'vue-router'
import FirstGen from '../views/FirstGen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Gen1',
      component: FirstGen,
    },
  ]
})

export default router
