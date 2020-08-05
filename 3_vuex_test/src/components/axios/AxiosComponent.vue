<template>
  <div>
    Axios Test
    <button @click="sendData">sendData</button>
  </div>
</template>

<script>
  export default {
    name: 'AxiosComponent',
    methods: {
      sendData () {
        // this.$store.state.counter++;
        console.log('first post');
      }
    }
  }
</script>

<style scoped>

</style>
