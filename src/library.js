class Library {
    #collection

    constructor() {
        this.#collection = []
    }

    get collection() {
        return this.#collection
    }

    addBook(title, authorName, authorAge, authorEmail, genre, release) {
        if (
          [title, authorName, authorEmail, genre, release].some(
            (prop) => typeof prop !== 'string' || prop === ''
          ) ||
          typeof authorAge !== 'number'
        ) {
          throw new Error("Book's properties should be provided correctly")
        }

        const bookToAdd = new Book(
          title,
          new Author(authorName, authorAge, authorEmail),
          genre,
          release
        )
        
        this.#collection.push(bookToAdd)
    }

    removeBook(title) {
        const bookToRemove = this.#collection.findIndex(
          (book) => book.title === title
        )

        if (bookToRemove === -1) {
            throw new Error('Book not found')
        }

        this.#collection.splice(bookToRemove, 1)
    }

    listCollection() {
        return this.#collection.map(book => (
            {
                title: book.title,
                author: {
                    name: book.author.name,
                    age: book.author.age,
                    email: book.author.email
                },
                genre: book.genre,
                release: book.release
            }
        ))
    }
}

class Book {
    #title
    #author
    #genre
    #release

    constructor(title, author, genre, release) {
        this.#title = title
        this.#author = author
        this.#genre = genre
        this.#release = release
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

    get release() {
        return this.#release
    }
}

class Author {
    #name
    #age
    #email

    constructor(name, age, email) {
        this.#name = name
        this.#age = age
        this.#email = email
    }

    get name() {
        return this.#name
    }

    get age() {
        return this.#age
    }

    get email() {
        return this.#email
    }
}

export default Library