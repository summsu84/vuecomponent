<template>
  <div>
    First Post
    <button @click="addCount">AddCount</button>
  </div>
</template>

<script>
  export default {
    name: 'FirstPostComponent',
    methods: {
      addCount () {
        // this.$store.state.counter++;
        console.log('first post');
      }
    }
  }
</script>

<style scoped>

</style>
