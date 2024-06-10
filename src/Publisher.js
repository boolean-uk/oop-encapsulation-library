export default class Publisher {
    #name;
    #website;
    #books;

    constructor(name, website) {
        this.#name = name;
        this.#website = website;
        this.#books = new Set();
    }

    get name() {
        return this.#name;
    }

    get website() {
        return this.#website;
    }

    addBook(book) {
        this.#books.add(book);
    }

    hasBook(bookTitle) {
        return Array.from(this.#books).some(book => book.title === bookTitle);
    }
}
