<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h2> {{ post.title }} </h2>
                <p> {{ post.contenu }} </p>
                <p class="small pull-right"> Par <strong>{{ post.auteur }}</strong>, le {{ post.date }} </p>
                <p> <a href=""><i class="fa fa-arrow-left"></i> Retour à l'accueil</a> </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>