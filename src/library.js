class Library {
    #books

    constructor() {
        this.#books = []
    }

    addBook(title, author, genre, publicationDate) {
        const bookToAdd = new Book(title, author, genre, publicationDate)
        this.#books.push(bookToAdd)
    }

    removeBook(title) {
        const bookToRemove = this.#books.findIndex((book) => book.title === title)

        if (bookToRemove === -1) {
            throw new Error('Book not found')
        }

        this.#books.splice(bookToRemove, 1)
    }

    listBooks() {
        return [...this.#books]
    }
}

class Book {
    #title
    #author
    #genre
    #publicationDate

    constructor(title, author, genre, publicationDate) {
        this.#title = title
        this.#author = author
        this.#genre = genre
        this.#publicationDate = publicationDate
    }
}

export { Book }
export default Library