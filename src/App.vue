<template>
    <div id="app">
        <navbar></navbar>

        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
    name: 'app',
    components: {
        navbar: Navbar
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
