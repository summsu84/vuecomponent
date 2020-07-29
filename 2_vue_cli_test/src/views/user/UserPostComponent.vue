<template>
    <div>
        Post
        <button @click="addCount">AddCount</button>
    </div>
</template>

<script>
    export default {
        name: "UserPostComponent",
        methods: {
            addCount() {
                this.$store.state.counter++;
            }
        }
    }
</script>

<style scoped>

</style>