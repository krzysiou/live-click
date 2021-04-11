<template>
  <Welcome/>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Welcome
  }
}

//FIRST
// const axios = require('axios')

// function makeTodoDone() {
//     axios.patch("http://localhost:3000/users/1233211212314145135")
//   }

// makeTodoDone()


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
