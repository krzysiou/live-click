<template>
    <div class="flex flex-col justify-around items-center w-full h-full min-h-screen bg-gray-100">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <div class="transition duration-700 transform hover:scale-105 relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
            <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p class="font-bold">Welcome to Live Click</p>
                <p>Create your own room and invite guests, let them compete on whoever pushes the button first.</p>
                </div>
                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Click the icon below to create your own room.</p>
                </div>
            </div>
            </div>
        </div>
        </div>  
        <div class="relative py-8 w-80">
            <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
            <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-5 flex flex-col justify-around">
                <form>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
                    </div>
                    <p v-if="error" class="text-red-500 mb-4">{{error}}</p>
                    <p class="mb-4 text-sm">Dont have an account? Register <a href="http://localhost:8080/#/register" class="text-blue-500">here</a></p> 
                    <div class="flex items-center justify-around">
                        <button @click="submit()" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'LogIn',
  data() {
    return {
        error: null,
    }
  },
  methods: {
    submit: async function(){
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await axios.post('http://localhost:3000/users/login', {
                username: username,
                password: password
            })
            if(response.data.id){
                location.replace("http://localhost:8080/#/users/"+response.data.id)
            }
        } catch(error) {
            this.error = error.response.data.error
        }
    }
  }
}
</script>


