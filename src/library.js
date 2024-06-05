class Library {
    #collection

    constructor() {
        this.#collection = []
    }

    get collection() {
        return this.#collection
    }

    addBook(title, author, genre, publicationDate) {
        if ([title, author, genre, publicationDate].some(prop => typeof prop !== 'string' || prop === '')) {
            throw new Error("Book's properties should be provided correctly")
        }

        const bookToAdd = new Book(title, author, genre, publicationDate)
        this.#collection.push(bookToAdd)
    }

    removeBook(title) {
        const bookToRemove = this.#collection.findIndex(book => book.title === title)

        if (bookToRemove === -1) {
            throw new Error('Book not found')
        }

        this.#collection.splice(bookToRemove, 1)
    }

    collectionList() {
        return this.#collection.map(book => (
            {
                title: book.title,
                author: book.author,
                genre: book.genre,
                publicationDate: book.publicationDate
            }
        ))
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

    get title() {
        return this.#title
    }

    get author() {
        return this.#author
    }

    get genre() {
        return this.#genre
    }

    set genre(newGenre) {
        this.#genre = newGenre
    }

    get publicationDate() {
        return this.#publicationDate
    }
}

export { Book }
export default Library