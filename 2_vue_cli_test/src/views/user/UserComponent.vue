<template>
    <div>
        <h2>UserHome</h2>
        <router-view/>
        <button @click="goProfile">Profile</button>
        <button @click="goPost">Post</button>
    </div>
    
</template>

<script>
    export default {
        name: "User",
        methods: {
            goProfile() {
                this.$router.push('profile');
            },
            goPost() {
                this.$router.push('post');
            }
        }
    }
</script>

<style scoped>

</style>