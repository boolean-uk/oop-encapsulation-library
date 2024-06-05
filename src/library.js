class Library {
    #books

    constructor() {
        this.#books = []
    }

    get books() {
        return structuredClone(this.#books)
    }

    addBook(title, author, genre, publicationDate, publisher) {
        const bookToAdd = new Book(title, author, genre, publicationDate, publisher)

        if (!bookToAdd.book.author.age || !bookToAdd.book.author.name || !bookToAdd.book.author.email) {
            throw 'author must have a name, age and email'
        }

        if (!bookToAdd.book.publisher.name || !bookToAdd.book.publisher.website) {
            throw 'publisher must have a name and website'
        }

        this.#books.push(bookToAdd.book)
    }

    removeBook(title) {
        const foundBook = this.#books.find((book) => book.title === title)
            
        const foundBookIndex = this.#books.indexOf(foundBook)

        if(!foundBook) {
            throw 'book not found'
        }

         this.#books.splice(foundBookIndex, 1)

         return foundBook
    }
}

class Book {
    #title
    #author
    #publicationDate
    #publisher
    
    constructor(title, author, genre, publicationDate, publisher) {
        this.#title = title
        this.#author = author
        this.genre = genre
        this.#publicationDate = publicationDate
        this.#publisher = publisher
    }

    get book() {
        return { 
            title: this.#title,
            author: this.#author,
            genre: this.genre,
            publicationDate: this.#publicationDate,
            publisher: this.#publisher
        }
    }
}

class Author {
    constructor(name, age, email) {
        this.name = name
        this.age = age
        this.email = email
    }
}

class Publisher {
    constructor(name, website) {
        this.name = name
        this.website = website
    }
}

export default Library
export { Author, Publisher }
