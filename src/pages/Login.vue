<template>
    <div class="container">
        <div class="form-group">
            <label for="login">Login</label>
            <input
                   type="text"
                   class="form-control"
                   id="login"
                   placeholder="Enter your login"
                   v-model.lazy="loginForm.email"
            />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
                   type="password"
                   class="form-control"
                   id="exampleInputPassword1"
                   placeholder="Password"
                   v-model.lazy="loginForm.password"
            />
            <small class="form-text text-muted" style="color:red" v-if="isFail">Неправельно набран логин или пароль</small>
        </div>
        <button type="submit" class="btn btn-primary" @click="login">Submit</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isFail: false,
                loginForm: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                fetch('https://my-json-server.typicode.com/OlegBen/jsonserver/users?id=' + this.loginForm.email)
                    .then(response => response.json())
                    .then(user => {
                        if(user[0].password === this.loginForm.password) {
                            localStorage.setItem('username', user[0].id);
                            this.isFail = false;
                            this.$router.push('/');
                        } else {
                            this.isFail = true;
                        }
                    })
                    .catch(err => {
                        this.isFail = true;
                    })
            }
        }
    }
</script>