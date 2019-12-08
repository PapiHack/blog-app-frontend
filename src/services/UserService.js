import { User } from '../Model/User'

export class UserService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient
    }

    displayError(error) {
        console.log('Une erreur est survenue lors de la requête => ' + error)
    }

    getAll() {
        let users = []
        this.HttpClient.get('users')
        .then(
            response => {
                const { results } = response.body
                for(let i = 0; i < results.length; i++) {
                    users.push(new User(results[i].id, results[i].login, results[i].password, 
                        results[i].nom, results[i].prenom, results[i].email, 
                        results[i].created_at))
                }
            },
            error => this.displayError(error)
        )
        return users
    }

    get(id) {
        let user = []
        this.HttpClient.get(`users/${id}`)
        .then((function(response) {
            const { body } = response
             let u = new User(body.id, body.login, body.password, 
                body.nom, body.prenom, body.email, body.created_at)
                user.push(u)
            }),
                error => this.displayError(error)
        )
        return user
    }

    add(user) {
        this.HttpClient.post('users', user)
        .then(
            response => console.log(response),
            error => console.log(error)
        )
    }
}