<template>
    <div class="container">
        <div class="form-group">
            <label for="login">Login</label>
            <input
                    type="text"
                    class="form-control"
                    id="login"
                    placeholder="Enter your login"
                    v-model.lazy="regForm.login"
            />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    v-model.lazy="regForm.password"
            />
            <small class="form-text text-muted" style="color:red" v-if="isFail">Пользователь с таким логином уже существует.</small>
            <small class="form-text text-muted" style="color:red" v-if="isErr">Что-то пошло не так.</small>
        </div>
        <button type="submit" class="btn btn-primary" @click="reg">Submit</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isErr: false,
                isFail: false,
                regForm: {
                    login: '',
                    password: ''
                }
            }
        },
        methods: {
            reg: async function() {
                await fetch('https://my-json-server.typicode.com/OlegBen/jsonserver/users?id=' + this.regForm.login)
                    .then(response => response.json())
                    .then(user => {
                        this.isErr = false;
                        if(user[0] && user[0].id === this.regForm.login) {
                            this.isFail = true
                        }
                    })
                    .catch(err => {
                        this.isErr = true;
                        console.log(err);
                    });
                if(!this.isFail && !this.isErr) {
                    fetch('https://my-json-server.typicode.com/OlegBen/jsonserver/users', {
                            method: "POST",
                            body: JSON.stringify({
                                "id": this.regForm.login,
                                "password": this.regForm.password
                            }),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            }
                        }
                    )
                        .then(response => response.json())
                        .then(json => {
                            localStorage.setItem('username', json.id);
                            this.$router.push('/')
                        })
                        .catch(err => {
                            this.isErr = true;
                        })
                }
            }
        }
    }
</script>