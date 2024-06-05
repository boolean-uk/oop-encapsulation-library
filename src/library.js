class Library {
    #books
    constructor() {
        this.#books = []
    }

    addBook(bookData) {
        const newBook = new Book(bookData)
        this.#books.push(newBook)
        return this.displayBooks()
    }

    removeBook(author, title) {
        const filteredArr = this.#books.filter((element) => {
            const isMatching =
                element.title === title && element.author === author

            return !isMatching
        })

        this.#books = [...filteredArr]
    }

    displayBooks() {
        const mappedBooks = this.#books.map((element) => {
            return element.bookInfo
        })

        return mappedBooks
    }
}

class Book {
    #author
    #title
    #publicationDate
    #genre

    constructor(book) {
        const { author, title, publicationDate, genre } = book

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

    get bookInfo() {
        return {
            author: this.#author,
            title: this.#title,
            publicationDate: this.#publicationDate,
            genre: this.#genre,
        }
    }
}

export default Library

export { Book }
