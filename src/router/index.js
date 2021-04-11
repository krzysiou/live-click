import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue'
import Rooms from '../components/Rooms.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/rooms/:roomId',
    name: 'Rooms',
    component: Rooms
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
