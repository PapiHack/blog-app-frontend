<template>
  <div>
    <app-navbar :auth="authenticated" 
                @deconnected="onDeconnect"
                :user="user">
    </app-navbar>
    <div class="container">
      <div class="row">
        <router-view :posts="posts" 
                     @connected="onConnect"
                     @addPost="onAddPost"
                     >
        </router-view>
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
        posts: [],
        authenticated: false,
        user: '',
        userService: new UserService(this.$http),
        postService: new PostService(this.$http),
      }
    },
    created() {
      this.getPosts()
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status
      },
      onConnect(user) {
        console.log('Connected !!!')
        this.user = user
        this.setAuthenticated(true)
        this.$router.replace({ name: 'Home' })
      },
      onDeconnect() {
        console.log('Deconnecting')
        this.user = {}
        this.user = ''
        this.setAuthenticated(false)
        this.$router.replace({ name: 'Home' })
      },
      onAddPost(post) {
        console.log(this.user.id)
        let newPost = {
          titre: post.titre,
          contenu: post.contenu,
          auteur: this.user.id
        }
        this.postService.add(newPost)
        .then(
          response => {
            console.log(response)
            if(response.status == 201) {
              this.getPosts()
              this.$router.replace({ name: 'Home' })
            }
            else
              this.$swal('Erreur', 'Une erreur est survenue lors de l\'ajout de votre post !', 'error')
          }
        )
      },
      getPosts() {
        this.postService.getAll()
        .then(
          data => this.posts = data
        )
      }
    }
  }
</script>
