<template>
  <div class="min-h-screen bg-gray-100 py-3 flex flex-col justify-around items-center sm:py-12">

    <div v-if="checkStatus" id="countdown"></div>

    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
      <button id="button" @click="pushButton()" class="transition duration-700 transform hover:scale-105 relative bg-white shadow-lg rounded-3xl sm:p-48 max-w-md mx-auto text-2xl font-bold inline-flex"></button>
    </div>
    <div class="flex flex-row justify-around w-96">
      <div class="relative py-3">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <button @click="leave()" class="transition duration-300 transform hover:scale-110 relative bg-white shadow-lg rounded-3xl sm:p-5 max-w-md mx-auto text-2xl font-bold inline-flex">
            <img src="../assets/exit.svg" alt="exit">
        </button>
      </div>

      <div v-if="isHost" class="relative py-3">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <button @click="clear()" class="transition duration-300 transform hover:scale-110 relative bg-white shadow-lg rounded-3xl sm:p-5 max-w-md mx-auto text-2xl font-bold inline-flex">
            <img src="../assets/retry.svg" alt="exit">
        </button>
      </div>

      <div v-if="isHost" class="relative py-3">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <button @click="playGame()" class="transition duration-300 transform hover:scale-110 relative bg-white shadow-lg rounded-3xl sm:p-5 max-w-md mx-auto text-2xl font-bold inline-flex">
            <img src="../assets/play.svg" alt="exit">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
const { getCookie } = require('../utils/cookies')
const jwt = require('jsonwebtoken')

export default {
  name: 'Rooms',
  computed: {
    isHost: function() {
      const roomId = window.location.href.split('/')[5]
      const token = getCookie('accessToken')
      const decoded = jwt.decode(token)
      const userId = decoded.id
      return userId === roomId
    },
    checkStatus: function() {
      return true
    },
  },
  methods: {
    leave: async function() {
      const roomId = window.location.href.split('/')[5]
      try {
            const response = await axios.post('http://localhost:3000/rooms/'+roomId+'/leave', {}, {
              headers: {
                'Authorization': `Basic ${getCookie('accessToken')}` 
              }
            })
            location.replace('http://localhost:8080/#/users/' + response.data.userId)

            await axios.delete('http://localhost:3000/rooms/'+roomId, {
              headers: {
                'Authorization': `Basic ${getCookie('accessToken')}` 
              },
              data: {
                fileId: fileId
              }
            })
        } catch (error) {
          this.error = error.response.data.error
        }

    },
    pushButton: async function() {
        const roomId = window.location.href.split('/')[5]

        try {
          await axios.patch('http://localhost:3000/rooms/'+roomId, {}, {
            headers: {
              'Authorization': `Basic ${getCookie('accessToken')}` 
            }
          })
        } catch (error) {
              this.error = error.response.data.error
        }
    },
    clear: async function() {
      const roomId = window.location.href.split('/')[5]
      try {
        await axios.patch('http://localhost:3000/rooms/'+roomId+'/clear', {}, {
          headers: {
            'Authorization': `Basic ${getCookie('accessToken')}` 
          }
        })
      } catch (error) {
            this.error = error.response.data.error
      }
    },
    playGame: async function() {
      const roomId = window.location.href.split('/')[5]
      try {
            await axios.patch('http://localhost:3000/rooms/'+roomId+'/play', {}, {
              headers: {
                'Authorization': `Basic ${getCookie('accessToken')}` 
              }
            })
        } catch (error) {
          this.error = error.response.data.error
        }

    }
  }
}
</script>