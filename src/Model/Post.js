export class Post {
    constructor(id, titre, contenu, auteur, created_at) {
        this.id = id
        this.titre = titre
        this.contenu = contenu
        this.auteur = auteur
        this.created_at = created_at
        this.like = 0
        this.dislike = 0
    }

    increaseLike() {
        this.like++
    }

    decreaseLike() {
        if (this.like > 0)
            this.like--
    }

    increaseDisike() {
        this.dislike++
    }

    decreaseDisike() {
        if (this.dislike > 0)
            this.dislike--
    }
}