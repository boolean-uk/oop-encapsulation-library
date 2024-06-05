class Library {
    #books

    constructor() {
        this.#books = []
    }

    get books() {
        return this.#books
    }

    addBook(title, author, genre, publicationDate, publisher) {
        const bookToAdd = new Book(title, author, genre, publicationDate, publisher)

        if (!bookToAdd.author.age || !bookToAdd.author.name || !bookToAdd.author.email) {
            throw 'author must have a name, age and email'
        }

        if (!bookToAdd.publisher.name || !bookToAdd.publisher.website) {
            throw 'publisher must have a name and website'
        }

        this.#books.push(bookToAdd)
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

    get title() {
        return this.#title
    }

    get author() {
        return this.#author
    }

    get publicationDate() {
        return this.#publicationDate
    }

    get publisher() {
        return this.#publisher
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
export { Book, Author, Publisher }
