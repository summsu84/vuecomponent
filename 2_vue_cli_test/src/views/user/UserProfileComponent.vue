<template>
    <div>
        Profile
        <button @click="subCount">SubCount</button>
    </div>
</template>

<script>
    export default {
        name: "UserProfileComponent",
        methods: {
            subCount() {
                this.$store.state.counter--;
            }
        }
    }
</script>

<style scoped>

</style>