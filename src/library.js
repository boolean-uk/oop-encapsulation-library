class Library {
  #books;

  constructor(books = []) {
    this.#books = books;
  }

  get books() {
    return structuredClone(this.#books);
  }

  addBook(book) {
    if (!book.title || !book.author || !book.publicationDate || !book.genre) {
      throw new Error(
        'This library requires a book with a title, author, genre, and year'
      );
    }
    this.#books.push(book);
  }
}

class Book {
  constructor(title, author, publicationDate, genre, publisher) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.genre = genre;
    this.publisher = publisher;
  }
}

// const library = new Library();
// library.addBook(new Book("cheese", "tomato", "pies"));

// console.log(library.books);

export { Library, Book };
