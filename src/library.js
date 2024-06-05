class Book {
    #title
    #author
    #genre
    #publicationYear

    constructor(title, author, genre, publicationYear) {
        this.#title = title
        this.#author = author
        this.#genre = genre
        this.#publicationYear = publicationYear
        console.log(`Book added: ${this.#title} by ${this.#author}`)
    }

    getTitle() {
        return this.#title
    }

    getAuthor() {
        return this.#author
    }

    getGenre() {
        return this.#genre
    }

    getPublicationYear() {
        return this.#publicationYear
    }
}

export { Book }