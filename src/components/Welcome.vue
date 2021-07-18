<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-around sm:py-12">
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

    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-5 flex flex-col justify-around">
        <p class="font-bold">Set custom name</p>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="newname" type="text" placeholder="Name">
        <div class="flex items-center justify-center">
          <button @click="submit()" class="bg-green-500 hover:bg-green-600 text-white font-bold my-4 w-24 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Change
          </button>
        </div>
      </div>
    </div>

    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform scale-95 -skew-x-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
      <button @click="redirect()" id="theButton" class="transition duration-300 transform hover:scale-110 relative bg-white shadow-lg rounded-3xl sm:p-5 max-w-md mx-auto text-2xl font-bold inline-flex">
        <img src="../assets/plus.svg" alt="add">
        <p class="ml-1">Create room</p>
      </button>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Welcome',
  methods: {
    redirect: function(){
      location.replace("http://localhost:8080/#/rooms/123");
    },
    submit: function(){
        const newUsername = document.getElementById("newname").value;
        document.getElementById("newname").value = ""
        const id = window.location.href.split("/")[5]
        axios.patch('http://localhost:3000/users/'+id, {
            name: newUsername,
        }).then(resp => {
            console.log(resp)
        })
    }
  }
}
</script>