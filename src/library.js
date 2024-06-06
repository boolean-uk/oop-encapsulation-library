class Library {
    #books
    constructor() {
        this.#books = []
    }
    get listBooks() {
        return [...this.#books]
    }
    addBook(title, author, genre, publicationDate) {
        const newBook = new Book(title, author, genre, publicationDate)
        // console.log(newBook)
        this.#books.push(newBook.info)
    }
    removeBook(title) {
        let bookIndex
        this.#books.forEach((b, index) => {
            if (title === b.title) {
                bookIndex = index
            }
        })
        if (bookIndex === undefined) {
            throw "Book isn't in the library"
        }
        this.#books.splice(bookIndex, 1)
    }
}

class Book {
    #info

    constructor(title, author, genre, publicationDate) {
        if (typeof title !== "string" || typeof author !== "string" || typeof genre !== "string" || typeof publicationDate !== "string") {
            throw "Book must have a title, author, genre and publication date as string data types"
        }
        else {
            this.#info = {title: title, author: author, genre: genre, publicationDate: publicationDate}
        }
    }
    get info() {
        return this.#info
    }
}

// console.log(new Book("ts"))
export { Book, Library}