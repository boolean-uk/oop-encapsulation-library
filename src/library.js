class Book {
    #title
    #author
    #genre
    #publicationYear

    constructor(title, author, genre, publicationYear) {
        if(!title || !author || !genre || !publicationYear) {
            throw new Error('All book details must be provided')
        }
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
        if (!title || !author || !genre || !publicationYear) {
            throw new Error('All books details must be provided')
        }
        try {
            const book = new Book(title, author, genre, publicationYear)
            if (!this.#books.some(b => b.getTitle() === title)) {
                 this.#books.push(book)
                 console.log(`Book added: ${title}`)
            } else {
                 console.log(`Book already exists: ${title}`)
            }
        } catch (error) {
                 console.error(`Failed to add book: ${error.message}`)
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