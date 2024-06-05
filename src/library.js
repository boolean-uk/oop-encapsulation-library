class Library {
    #books
    constructor() {
        this.#books = []
    }

    addBook(bookData) {
        const newBook = new Book(bookData)
        this.#books.push(newBook)
        return this.books
    }

    removeBook(title, author) {
        const filteredArr = this.#books.filter((element) => {
            return !element.title === title && element.author === author
        })

        this.#books = [...filteredArr]
    }

    get books() {
        return [...this.#books]
    }
}

class Book {
    #author
    #title
    #publicationDate
    #genre

    constructor(book) {
        const { author, title, publicationDate, genre } = book

        console.log(author, title, publicationDate, genre)

        if (!author | !title || !publicationDate || !genre) {
            throw new Error('Invalid book data')
        }

        this.#author = author
        this.#title = title
        this.#publicationDate = publicationDate
        this.#genre = genre
    }

    get author() {
        return this.#author
    }

    get title() {
        return this.#title
    }

    get publicationDate() {
        return this.#publicationDate
    }

    get genre() {
        return this.#genre
    }
}

export default Library

export { Book }
