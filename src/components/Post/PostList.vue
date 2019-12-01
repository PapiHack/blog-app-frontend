<template>
    <div>
        <h1>Liste des derniers posts.</h1>
        <div class="list-group">
            <post-item v-for="post in posts" :post="post" :key="post.id"></post-item>
        </div>
    </div>
</template>

<script>
    import PostListItem from './PostListItem'

    export default {
        components: {
            'post-item': PostListItem
        },
       props: {
           posts: {
               type: Array,
               required: true
           }
       } 
    }
</script>