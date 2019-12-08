import { Post } from '../Model/Post'
import { UserService } from './UserService'
import { User } from '../Model/User'

export class PostService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient
        this.userService = new UserService(this.HttpClient)
    }

    displayError(error) {
        console.log('Une erreur est survenue lors de la requête => ' + error)
    }

    getAll() { 
        let posts = []
        this.HttpClient.get('articles')
        .then(
            response => {
                const { results } = response.body
                for (let result of results) {
                    posts.push(new Post(result.id, result.titre, 
                                result.contenu,result.auteur, result.created_at))
                }
            },
            error => this.displayError(error)
        )
        return posts
    }

    get(id) {
        let post = ''
        this.HttpClient.get(`articles/${id}`)
        .then(
            response => {
                const { body } = response
                post = new Post(body.id, body.titre, body.contenu, body.auteur, body.created_at)
            },
            error => this.displayError(error)
        )
        return post 
    }

    add(post) {
        this.HttpClient.post('articles', post)
        .then(
            response => console.log(response),
            error => console.log(error)
        )
    }

    getAllPostByUser() {
        let posts = this.getAll()
        for (let post of posts) {
            let author = this.userService.get(post.auteur)
            console.log('author', author)
            posts.map(p => {
                if (p.id == post.id)
                    p.author = author
            })
        }
        // return posts
    }
}