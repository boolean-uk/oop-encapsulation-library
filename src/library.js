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
        console.log(`Book details added: ${this.#title} by ${this.#author}`)
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

class Library {
    #books = []

    addBook(title, author, genre, publicationYear) {
        const book = new Book(title, author, genre, publicationYear)
        this.#books.push(book)
        console.log(`Book added: ${title}`)
    }

    listBooks() {
        const bookTitles = this.#books.map(book => book.getTitle())
        console.log(`Books in library: ${bookTitles.join(', ')}`)
        return bookTitles
    }
}

export { Book, Library }