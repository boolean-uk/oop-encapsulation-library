class Library {
    #books

    constructor() {
        this.#books = []
    }

    get books() {
        return structuredClone(this.#books)
    }

    addBook(title, author, genre, publicationDate) {
        const bookToAdd = new Book(title, author, genre, publicationDate)

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
    
    constructor(title, author, genre, publicationDate) {
        this.#title = title
        this.#author = author
        this.genre = genre
        this.#publicationDate = publicationDate
    }

    get book() {
        return { 
            title: this.#title,
            author: this.#author,
            genre: this.genre,
            publicationDate: this.#publicationDate
        }
    }

}

export default Library
