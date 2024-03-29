import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue'
import Rooms from '../components/Rooms.vue'
import LogIn from '../components/LogIn.vue'
import Error from '../components/Error.vue'
import Register from '../components/Register.vue'
import axios from 'axios'
import jwt from 'jsonwebtoken'
const { getCookie } = require('../utils/cookies')


const routes = [
  {
    path: '/',
    beforeEnter: ( async (to, from, next) => {
      //CHECK IF TOKEN EXISTS
      const token = getCookie("accessToken")
      if(token){
        const decoded = jwt.decode(token)
        const userId = decoded.id
        //REDIRECT TO USER ACCOUNT
        next('/users/'+userId)
        return
      }
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
    beforeEnter: ( async (to, from, next) => {
      //CHERCK IF TOKEN EXISTS
      const token = getCookie("accessToken")
      if(token){
        const decoded = jwt.decode(token)
        const userId = decoded.id
        //REDIRECT TO USER ACCOUNT
        next('/users/'+userId)
        return
      }
      next()
    }),
    name: 'LogIn',
    component: LogIn
  },

  {
    path: '/rooms/:roomId',
    name: 'Rooms',
    component: Rooms,
    beforeEnter: ( async (to, from, next) => {
      //GET ROOMID FROM URL
      const roomId = to.path.split("/")[2]
      const response = await axios.get("http://localhost:3000/rooms")
      //CHECK IF ROOM ALREADY EXISTS
      const isPresent = response.data.some(room => room.id === roomId)
      if(isPresent == false){
        next('/error')
        return
      } else {
        //CHECK IF TOKEN EXISTS
        const token = getCookie('accessToken')
        if(!token){
          next('/error')
        } else{
          try {
            //ADD USER TO ROOM
            await axios.get('http://localhost:3000/rooms/'+roomId, {
              headers: {
                'Authorization': `Basic ${token}` 
              }
            })
        } catch (error) {
            console.log(error)
        }
          next()
        }
      }
    })
  },

  {
    path: '/users/:userId',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: ( async (to, from, next) => {
      //GET USERID FROM URL
      const id = to.path.split("/")[2]
      const response = await axios.get("http://localhost:3000/users")
      //CHECK IF USER EXISTS
      const isPresent = response.data.some(user => user.id === id)
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
