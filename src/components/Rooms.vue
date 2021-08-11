<template>
  <div class="min-h-screen bg-gray-100 py-3 flex flex-col justify-around sm:py-12">

    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
      <button class="transition duration-700 transform hover:scale-105 relative bg-white shadow-lg rounded-3xl sm:p-48 max-w-md mx-auto text-2xl font-bold inline-flex">
      </button>
    </div>

      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <button @click="submit()" class="transition duration-300 transform hover:scale-110 relative bg-white shadow-lg rounded-3xl sm:p-5 max-w-md mx-auto text-2xl font-bold inline-flex">
            <img src="../assets/exit.svg" alt="exit">
        </button>
      </div>

  </div>
</template>

<script>
const axios = require('axios')
const { getCookie } = require('../utils/cookies')

export default {
  name: 'Rooms',
  methods: {
    submit: async function() {
      const roomId = window.location.href.split('/')[5]

      try {
            const response = await axios.post('http://localhost:3000/rooms/'+roomId+'/leave', {}, {
              headers: {
                'Authorization': `Basic ${getCookie('accessToken')}` 
              }
            })
            await axios.delete('http://localhost:3000/rooms/'+roomId, {
              headers: {
                'Authorization': `Basic ${getCookie('accessToken')}` 
              }
            })
          location.replace('http://localhost:8080/#/users/' + response.data.userId)
        } catch (error) {
            this.error = error.response.data.error
        }

    }
  }
}
</script>