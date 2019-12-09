<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <form @submit.prevent="submitLoginForm">
                    <div class="form-group">
                        <label for="login">Pseudo</label>
                        <input type="text" id="login" name="login" class="form-control" v-model="userLoginInfo.login" />
                    </div>
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" name="password" class="form-control" v-model="userLoginInfo.password" />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">Se connecter</button>
                        <button class="btn btn-danger">Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { UserService } from '../../services/UserService'

    export default {
        data() {
            return {
                userLoginInfo: {
                    login: '',
                    password: ''
                },
                users: [],
                userService: new UserService(this.$http)
            }
        },
        methods: {
            submitLoginForm() {
                let connected = false
                for (let user of this.users) {
                    if(user.login == this.userLoginInfo.login && user.password == this.userLoginInfo.password) {
                        this.$emit('connected', user)
                        console.log('BON')
                        connected = true
                        break
                    }
                }
                if(!connected)
                    this.$swal('Login ou mot de passe incorrecte!')
            }
        },
        created() {
            this.userService.getAll()
            .then(
                data => this.users = data
            )
        }
    }
</script>