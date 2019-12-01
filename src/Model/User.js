export class User {
    constructor(id, login, password, nom, prenom, email, created_at) {
        this.id = id
        this.login = login
        this.password = password
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.created_at = created_at
    }
}