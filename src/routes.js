import PostList from './components/Post/PostList'
import NewPost from './components/Post/NewPost'
import PostDetails from './components/Post/PostDetails'
import Login from './components/User/Login'
import Register from './components/User/Register'
import About from './components/Shared/About'

export const routes = [
    { path: '', component: PostList, name: 'Home' },
    { path: '/post/:id', component: PostDetails, name: 'PostDetails' },
    { path: '/nouveau-post', component: NewPost, name: 'NewPost' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/register', component: Register, name: 'Register' },
    { path: '/about', component: About, name: 'About' },
]