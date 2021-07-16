<template>
    <div class="flex items-center justify-center w-full h-full py-48">
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
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
                </div>
                <div class="flex items-center justify-center">
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
const { uuid } = require('uuidv4');
const axios = require('axios');
//const { getCookie, setCookie } = require('../utils/cookies.js');

// if(getCookie("userId")){
//     let readId = getCookie("userId")
//     window.location.replace("http://localhost:8080/#/users/"+readId)
// }

export default {
  name: 'LogIn',
  methods: {
    submit: function(){
        const usrnm = document.getElementById("username").value;
        const passwd = document.getElementById("password").value;
        const id = uuid()
        axios.post('http://localhost:3000/users', {
            userId: id,
            username: usrnm,
            password: passwd
        }).then(resp => {
            console.log(resp)
        })
        //setCookie("userId", id, 5)
        window.location.replace("http://localhost:8080/#/users/"+id)
    }
  }
}
</script>