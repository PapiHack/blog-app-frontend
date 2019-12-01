<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <form @submit.prevent="submitPostAddForm">
                    <div class="form-group">
                        <label for="titre">Titre</label>
                        <input type="text" class="form-control" required id="titre" name="titre" v-model="post.titre"/>
                    </div>
                    <div class="form-group">
                        <label for="contenu">Contenu</label>
                        <textarea name="contenu" id="contenu" required cols="66" rows="10" v-model="post.contenu"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">Soumettre</button>
                        <button class="btn btn-danger">Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { Post } from '../../Model/Post'

    export default {
        data() {
            return {
                post: Post
            }
        },
        methods: {
            submitPostAddForm(event) {
                console.log(event)
            }
        }    
    }
</script>