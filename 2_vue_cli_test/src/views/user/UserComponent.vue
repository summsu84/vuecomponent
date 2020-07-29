<template>
    <div>
        <h2>UserHome Counter : {{$store.state.counter}}</h2>
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
                this.$router.push('/user/profile');
            },
            goPost() {
                this.$router.push('/user/post');
            }
        }
    }
</script>

<style scoped>

</style>