export default class Library {
  #id;
  #books;

  constructor() {
    this.#id = 0;
    this.#books = [];
  }

  get books() {
    return structuredClone(this.#books);
  }

  setGenre(id, newGenre) {
    this.findBook(id).setGenre(newGenre);
  }

  addBook(title, author, publicationDate, genre) {
    this.#id++;
    const newBook = new Book(title, author, publicationDate, genre, this.#id);

    this.#books.push(newBook);
  }

  removeBook(id) {
    const bookToRemove = this.findBook(id);
    this.#books = this.#books.filter((book) => book.id !== bookToRemove.id);
  }

  findBook(id) {
    const book = this.#books.find((book) => book.id === id);
    if (!book)
      throw new Error(
        `The book with id ${id} is not found! May be the book does not exist or the ID provided is incorrect or it not a number`
      );
    return book;
  }
}

export class Book {
  constructor(title, author, publicationDate, genre, id) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.genre = genre;
    this.id = id;
  }

  setGenre(newGenre) {
    this.genre = newGenre;
  }
}
