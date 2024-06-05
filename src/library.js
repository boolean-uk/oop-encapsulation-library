class Library {
    #books

    constructor() {
        this.#books = []
    }

    get books() {
        return structuredClone(this.#books)
    }

    addBook(title, authorName, AuthorAge, AuthorEmail, genre, publicationDate, publisherName, publisherWebsite) {
        const bookToAdd = new Book(title, authorName, AuthorAge, AuthorEmail, genre, publicationDate, publisherName, publisherWebsite)

        this.#books.push(bookToAdd.book)
    }

    removeBook(title, author) {
        const foundBook = this.#books.find((book) => 
            book.title === title &&
            book.author === author)
            
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
    
    constructor(title, authorName, AuthorAge, AuthorEmail, genre, publicationDate, publisherName, publisherWebsite) {
        this.#title = title
        this.#author = new Author(authorName, AuthorAge, AuthorEmail)
        this.genre = genre
        this.#publicationDate = publicationDate
        this.#publisher = new Publisher(publisherName, publisherWebsite)
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
