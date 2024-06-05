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

class Author {
    constructor(name, age, email) {
        this.name = name
        this.age = age
        this.email = email
    }
}


export { Library, Book, Author };
