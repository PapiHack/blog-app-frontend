<template>
    <div class="col-lg-6">
        <article class="list-group-item" :class="getClass()">
            <h3> {{ post.titre }} </h3>
            
            <p> {{ post.contenu }} 
                <span class="pull-right">Par <strong>{{ post.auteur.login }}</strong>, le {{ post.created_at|formatDate}}</span>
            </p>
            <div>
                <button class="btn btn-success" @click="like">J'aime <i class="fa fa-thumbs-up"></i></button>
                <button class="btn btn-danger" @click="dislike">J'aime pas <i class="fa fa-thumbs-down"></i></button>
            </div>
        </article>
    </div>
</template>

<script>
    import moment from 'moment' 
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        },
        methods: {
            like() {
                this.post.increaseLike()
            },
            dislike() {
                this.post.increaseDislike()
            },
            getClass() {
                if (this.post.like > this.post.dislike) {
                    return {
                        'list-group-item-success': true,
                        'list-group-item-danger': false
                    }
                }
                else if(this.post.like < this.post.dislike) {
                    return {
                        'list-group-item-success': false,
                        'list-group-item-danger': true
                    }
                }
            }
        }
    }
</script>