<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <form>
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" required v-model="user.nom" name="nom" id="nom" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="prenom">Prenom</label>
                        <input type="text" required v-model="user.prenom" name="prenom" id="prenom" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="login">Pseudo</label>
                        <input type="text" required v-model="user.login" name="login" id="login" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" required v-model="user.email" name="email" id="email" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" required v-model="user.password" name="password" id="password" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="mdp">Confirmer mot de passe</label>
                        <input type="text" required v-model="mdp" name="mdp" id="mdp" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">Valider</button>
                        <button class="btn btn-danger">Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { User } from '../../Model/User'
    export default {
        data() {
            return {
                user: User,
                mdp: ''
            }
        }
    }
</script>