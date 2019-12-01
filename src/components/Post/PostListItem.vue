<template>
    <div class="col-lg-6">
        <article class="list-group-item">
            <h3> {{ post.titre }} </h3>
            
            <p> {{ post.contenu }} 
                <span class="pull-right">Par <strong>{{ post.auteur }}</strong>, le {{ post.created_at }}</span>
            </p>
            <div>
                <button class="btn btn-success">J'aime <i class="fa fa-thumbs-up"></i></button>
                <button class="btn btn-danger">J'aime pas <i class="fa fa-thumbs-down"></i></button>
            </div>
        </article>
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