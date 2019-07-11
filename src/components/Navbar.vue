<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div class="collapse navbar-collapse">
            <div class="navbar-nav ml-auto">
                <template v-if="!Boolean(isLog)">
                    <router-link class="nav-item nav-link" to="/login" active-class="active">Login</router-link>
                    <router-link class="nav-item nav-link" to="/reg" active-class="active">Register</router-link>
                </template>
                <template v-else="">
                    <button class="btn btn-light ml-auto" @click="exit()">Exit</button>
                </template>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                isLog: false
            }
        },
        beforeMount: function() {
            let username = localStorage.getItem('username');
            this.isLog = !!username;
            if(!this.isLog && this.$route.path !== '/login' && this.$route.path !== '/reg') {
                this.$router.replace('/login');
            }
        },
        methods: {
            exit: function() {
                this.isLog = false;
                localStorage.removeItem('username');
                this.$router.push('/login');
            }
        }
    }
</script>