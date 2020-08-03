<template>
  <div>
    First Profile
    <button @click="subCount">SubCount</button>
  </div>
</template>

<script>
  export default {
    name: 'FirstProfileComponent',
    methods: {
      subCount () {
        // this.$store.state.counter--;
      }
    }
  }
</script>

<style scoped>

</style>
