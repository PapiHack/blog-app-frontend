import { User } from '../Model/User'

const apiUrl = 'http://localhost:8000/users'

export class UserService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient
    }

    displayError(error) {
        console.log('Une erreur est survenue lors de la requête => ' + error)
    }

    async getAll() {
        // return this.HttpClient.get('users/')
        // .then(
        //     response => {
        //         let users = []
        //         const { results } = response.body
        //         for(let result of results) {
        //             users.push(new User(result.id, result.login, result.password, 
        //                 result.nom, result.prenom, result.email, result.created_at))
        //         }
        //         return users
        //     },
        //     error => this.displayError(error)
        // )
        // return users
        let users = []
        let response 
        try {
            response = await this.HttpClient.get(`${apiUrl}`)
        }
        catch(er) {
            this.displayError(er)
        }
        let data = await response.json()
        const { results } = data
        for (let result of results) {
            users.push(new User(result.id, result.login, result.password,
                result.nom, result.prenom, result.email, result.created_at))
        }
        return users
    }

    get(id) {
        return this.HttpClient.get(`${apiUrl}/${id}/`)
        .then(
            response => {
                const { body } = response
                return new User(body.id, body.login, body.password, body.nom, 
                    body.prenom, body.email, body.created_at)
            },
            error => this.displayError(error)
        )
    }

    add(user) {
        return this.HttpClient.post(`${apiUrl}`, user)
        .then(
            response => response,
            error => error
        )
    }
}