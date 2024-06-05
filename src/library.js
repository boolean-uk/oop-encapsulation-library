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
        if (!this.#books.some(book => book.getTitle() === title)) {
        const book = new Book(title, author, genre, publicationYear)
        this.#books.push(book)
        console.log(`Book added: ${title}`)
    } else {
        console.log(`Book already exists: ${title}`)
    }
}

    removeBook(title) {
        const initialLength= this.#books.length
        this.#books = this.#books.filter(book => book.getTitle() !== title)
        if (this.#books.length < initialLength) {
            console.log(`Book removed: ${title}`)
        } else {
            console.log(`Book not found ${title}`)
        }
    }
    

    listBooks() {
        const bookTitles = this.#books.map(book => book.getTitle())
        console.log(`Books in library: ${bookTitles.join(', ')}`)
        return bookTitles
    }
}

export { Book, Library }