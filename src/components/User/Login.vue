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
                        <input type="text" id="password" name="password" class="form-control" v-model="userLoginInfo.password" />
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
    export default {
        data() {
            return {
                userLoginInfo: {
                    login: '',
                    password: ''
                }
            }
        },
        methods: {
            submitLoginForm(event) {
                console.log(event)
            }
        }
    }
</script>