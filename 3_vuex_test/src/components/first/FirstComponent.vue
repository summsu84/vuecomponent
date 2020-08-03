<template>
    <div>
        <h2>First Home Component</h2>
        <router-view/>
        <button @click="goProfile">Profile</button>
        <button @click="goPost">Post</button>
    </div>

</template>

<script>
    export default {
        name: "First",
        methods: {
            goProfile() {
                this.$router.push('/first/profile');
            },
            goPost() {
                this.$router.push('/first/post');
            }
        }
    }
</script>

<style scoped>

</style>
