class Book {
  constructor(title, author, date) {
    this.title = title;
    this.author = author;
    this.publicationDate = date;
    Object.freeze(this);
  }
}

class Library {
  #books;
  constructor() {
    this.#books = [];
  }
  set books(book) {
    if (typeof book !== "object") {
      throw "book is not valid";
    }
    this.#books.push(book);
  }
  add(book) {
    this.#books.push(book);
  }
  get books() {
    return [...this.#books];
  }
  remove(book) {
    const found = this.#books.find((b) => b.title === book.title);
    const index = this.#books.indexOf(book);
    const newLibray = this.#books.splice(index, 1);
    if (!found) {
      throw "book not found";
    }
    return newLibray;
  }
}
