export default class Library {
    #books;

    constructor() {
        this.#books = [];
    }

    addBook(book) {
        if (!book.publisher.hasBook(book.title)) {
            throw new Error("Publisher does not list this book.");
        }
        this.#books.push(book);
    }

    removeBook(bookTitle) {
        this.#books = this.#books.filter(book => book.title !== bookTitle);
    }

    listBooks() {
        return this.#books;
    }

    searchByGenre(genre) {
        return this.#books.filter(book => book.genre === genre);
    }

    searchByAuthor(authorName) {
        return this.#books.filter(book => book.author.name === authorName);
    }

    searchByPublisher(publisherName) {
        return this.#books.filter(book => book.publisher.name === publisherName);
    }
}
