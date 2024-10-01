import { createRouter, createWebHistory } from 'vue-router'
import Pokedex from '@/components/Pokedex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pokedex',
      name: 'pokedex',
      component: Pokedex
    },
  ]
})

export default router
