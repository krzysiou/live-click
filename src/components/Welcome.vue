<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 mb-20 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-5 flex flex-col justify-around">
        <p class="font-bold">Set custom name</p>
        <input class="shadow appearance-none border rounded w-full mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="newname" type="text" placeholder="Name">
        <p v-if="error" class="text-red-500 mt-4">{{error}}</p>
        <div class="flex items-center justify-center">
          <button @click="submit()" class="bg-green-500 hover:bg-green-600 text-white font-bold my-4 w-24 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Change
          </button>
        </div>
      </div>
    </div>
  <div class="flex justify-center mb-20">
    <div class="relative py-8 w-80">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-5 flex flex-col justify-around">
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Join Lobby
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="roomid" type="text" placeholder="Lobby Id">
                </div>
                <p v-if="error" class="text-red-500 mb-4">{{error}}</p>
                <div class="flex items-center justify-around">
                    <button @click="joinLobby()" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Join
                    </button>
                </div>
            </form>
        </div>
    </div>
  </div>

    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
      <button @click="createRoom()" id="theButton" class="w-full flex justify-between transition duration-300 transform hover:scale-110 relative bg-white shadow-lg rounded-3xl sm:p-5 max-w-md mx-auto text-2xl font-bold">
        <img src="../assets/plus.svg" alt="add">
        <p class="ml-1">Create room</p>
      </button>
    </div>
    <div class="relative py-3 mt-10 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <button @click="previous()" class="transition duration-300 transform hover:scale-110 relative bg-white shadow-lg rounded-3xl sm:p-5 max-w-md mx-auto text-2xl font-bold inline-flex">
            <img src="../assets/exit.svg" alt="exit">
        </button>
      </div>
  </div>
</template>

<script>
import { getCookie, deleteCookie } from '../utils/cookies';
const axios = require('axios');

export default {
  name: 'Welcome',
  data() {
    return {
        error: null
    }
  },
  methods: {
    createRoom: async function(){
      const id = window.location.href.split("/")[5]
      try {
        await axios.post('http://localhost:3000/rooms', {
              ownerId: id
            }, {
              headers: {
                'Authorization': `Basic ${getCookie('accessToken')}` 
              }
            })
      } catch (error) {
        this.error = error.response.data.error
      } finally { 
        location.replace("http://localhost:8080/#/rooms/"+id);
      }
        
    },
    submit: async function(){
        const newUsername = document.getElementById("newname").value;
        if(newUsername === ""){
          return
        }
        const id = window.location.href.split("/")[5]
        document.getElementById("newname").value = ""

        try {
            await axios.patch('http://localhost:3000/users/'+id, {
              username: newUsername
            }, {
              headers: {
                'Authorization': `Basic ${getCookie('accessToken')}` 
              }
            })
        } catch (error) {
            this.error = error.response.data.error
        }
    },
    previous: function() {
      deleteCookie('accessToken')
      location.replace('http://localhost:8080/#/login')
    },
    joinLobby: async function(){
      const roomId = document.getElementById("roomid").value;
      if (roomId === "") { return }
      location.replace('http://localhost:8080/#/rooms/'+roomId)
    }
  }
}
</script>