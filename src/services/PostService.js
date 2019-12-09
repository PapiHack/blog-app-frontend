import { Post } from '../Model/Post'
import { UserService } from './UserService'

const apiUrl = 'http://localhost:8000/articles'

export class PostService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient
        this.userService = new UserService(this.HttpClient)
    }

    displayError(error) {
        console.log('Une erreur est survenue lors de la requête => ' + error)
    }

    async getAll() { 
        let posts = []
        let response
        try {
            response = await this.HttpClient.get(`${apiUrl}/`)
        }
        catch(er) {
            this.displayError(er)
        }
        let data = await response.json()
        const { results } = data
        for (let result of results) {
            let auteur = await this.userService.get(result.auteur)
            posts.push(new Post(result.id, result.titre,
                result.contenu, auteur, result.created_at))
        }

        return posts
    }

    get(id) {
        return this.HttpClient.get(`${apiUrl}/${id}/`)
        .then(
            response => {
                const { body } = response
                return new Post(body.id, body.titre, body.contenu, body.auteur,
                    body.created_at)
            },
            error => this.displayError(error)
        )
    }

    add(post) {
        return this.HttpClient.post(`${apiUrl}/`, post)
        .then(
            response => response,
            error => error
        )
    }
}