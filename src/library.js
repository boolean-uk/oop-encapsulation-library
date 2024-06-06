import Book from "/Users/samisaeed/Boolean/oop-encapsulation-library/src/book.js";

export default class Library {
  #books;

  constructor() {
    this.#books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this.#books.push(book);
    } else {
      throw new Error("Only Book instances can be added to the library");
    }
  }

  removeBook(title) {
    const bookIndex = this.#books.findIndex((book) => book.title === title);
    if (bookIndex !== -1) {
      this.#books.splice(bookIndex, 1);
    } else {
      throw new Error("Book not found in the library");
    }
  }

  listBooks() {
    return this.#books.map(
      (book) =>
        `${book.title} by ${book.author}, Genre: ${book.genre}, Published: ${book.publicationDate}`
    );
  }

  get books() {
    return [...this.#books];
  }
}
