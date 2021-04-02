<template>
  <div class="hello">
    <h1 class="text-lg font-semibold">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>