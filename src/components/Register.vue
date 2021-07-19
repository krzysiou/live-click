<template>
    <div class="flex items-center justify-center w-full h-full py-48 min-h-screen bg-gray-100">
    <div class="relative py-8 w-80">
        <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-5 flex flex-col justify-around">
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        E-mail
                    </label>
                    <input class="shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="E-mail">
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
                <p class="mb-4 text-sm">Already registered? Sign in <a href="http://localhost:8080/#/login" class="text-blue-500">here</a></p> 
                <div class="flex items-center justify-around">
                    <button @click="submit()" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Register
                    </button>
                </div>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios')
const { uuid } = require('uuidv4');

export default {
  name: 'Register',
  data() {
      return {
          error: null
      }
  },
  methods: {
      submit: async function(){
        const email = document.getElementById("email").value;
        const usrnm = document.getElementById("username").value;
        const passwd = document.getElementById("password").value;
        const id = uuid()

        try {
            await axios.post('http://localhost:3000/users/register', {
                userId: id,
                email: email,
                username: usrnm,
                password: passwd
            })

            window.location.replace("http://localhost:8080/#/users/"+id)
        } catch (error) {
            this.error = error.response.data.error
        }
    }
  }
}
</script>


