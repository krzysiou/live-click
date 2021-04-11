<template>
  <router-link to="/"></router-link>
  <router-link to="/rooms/:id"></router-link>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
const { uuid } = require('uuidv4');
const axios = require('axios');
const { getCookie, setCookie } = require('./utils/cookies.js');

//USER ID
if(!getCookie("userId")){
  console.log("NIE MA")
  const id = uuid()
  setCookie("userId", id, 5)
  axios.patch('http://localhost:3000/users/'+id).then(resp => {
      console.log(resp)
  })
}
//ADDING USER
</script>

