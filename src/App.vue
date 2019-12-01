<template>
  <div>
    <app-navbar></app-navbar>
    <div class="container">
      <div class="row">
        <router-view :posts="posts"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Shared/Navbar'
  import PostList from './components/Post/PostList'
  import { Post } from './Model/Post'

  export default {
    components: {
      appNavbar: Navbar,
      postList: PostList
    },
    name: 'app',
    data () {
      return {
        posts: [
          new Post(1, 'first post', 'this is the first post', 'papi', new Date().toLocaleString()),
          new Post(2, 'second post', 'this is the second post', 'toto', new Date().toLocaleString()),
          new Post(3, 'third post', 'this is the third post', 'fenek', new Date().toLocaleString()),
          new Post(4, 'fourth post', 'this is the fourth post', 'fenek', new Date().toLocaleString()),
        ]
      }
    },
    created() {
      this.$http.get('http://localhost:8000/articles')
      .then(
        response => {
          console.log(response.body.results)
        },
        error => console.log(error)
      )
    }
  }
</script>
