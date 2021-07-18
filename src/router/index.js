import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue'
import Rooms from '../components/Rooms.vue'
import LogIn from '../components/LogIn.vue'
import Error from '../components/Error.vue'
import Register from '../components/Register.vue'
import axios from 'axios'

const routes = [
  {
    path: '/',
    beforeEnter: ( async (to, from, next) => {
      next('/login')
    })
  },
  
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/login',
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
    component: Welcome,
    beforeEnter: ( async (to, from, next) => {
      const id = to.path.split("/")[2]
      const response = await axios.get("http://localhost:3000/users")
      const isPresent = response.data[id] != undefined
      console.log(isPresent, id, response.data)
      if(isPresent == false){
        next('/error')
        return
      }
      next()
    })
  },

  {
    path: '/error',
    name: 'Error',
    component: Error
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
