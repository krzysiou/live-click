import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue'
import Rooms from '../components/Rooms.vue'
import LogIn from '../components/LogIn.vue'
import Error from '../components/Error.vue'

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/rooms/:roomId',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/users/:userId',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
