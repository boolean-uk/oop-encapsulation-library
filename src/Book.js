export default class Book {
    #title;
    #author;
    #genre;
    #publicationDate;
    #publisher;

    constructor(title, author, genre, publicationDate, publisher) {
        this.#title = title;
        this.#author = author;
        this.#genre = genre;
        this.#publicationDate = publicationDate;
        this.#publisher = publisher;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get genre() {
        return this.#genre;
    }

    set genre(value) {
        this.#genre = value;
    }

    get publicationDate() {
        return this.#publicationDate;
    }

    get publisher() {
        return this.#publisher;
    }
}
