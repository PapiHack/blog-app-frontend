<template>
  <div>
    <app-navbar :auth="authenticated"></app-navbar>
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
  import { UserService } from './services/UserService'
  import { PostService } from './services/PostService'

  export default {
    components: {
      appNavbar: Navbar,
      postList: PostList
    },
    name: 'app',
    data () {
      return {
        posts: '',
        authenticated: false,
        user: {},
        userService: new UserService(this.$http),
        postService: new PostService(this.$http),
      }
    },
    created() {
      this.posts = this.postService.getAll()
      console.log(this.postService.getAllPostByUser())
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status
      }
    }
  }
</script>
