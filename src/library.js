class Library {
  #books;

  constructor(books = []) {
    this.#books = [...books];
  }

  get books() {
    return [...this.#books];
  }

  addBook(book) {
    if (!book.title || !book.author || !book.publicationDate || !book.genre) {
      throw new Error(
        "This library requires a book with a title, author, genre, and year"
      );
    }

    if (!book.author.name || !book.author.age || !book.author.email) {
      throw new Error(
        "Books being added to this library require the author to have a name, age, and email address"
      );
    }

    if (
      !book.publisher.name ||
      !book.publisher.website ||
      !book.publisher.collection.includes(book)
    ) {
      throw new Error(
        "Books being added to this library require a publisher with name, website, and this book in their collection"
      );
    }
    this.#books.push(book);
  }

  findGenre(searchTerm) {
    const results = [];
    this.books.forEach((book) => {
      if (book.genre === searchTerm) {
        results.push(book);
      }
    });
    return results;
  }

  findAuthor(searchTerm) {
    const results = [];
    this.books.forEach((book) => {
      if (book.author.name === searchTerm) {
        results.push(book);
      }
    });
    return results;
  }

  findPublisher(searchTerm) {
    const results = [];
    this.books.forEach((book) => {
      if (book.publisher.name === searchTerm) {
        results.push(book);
      }
    });
    return results;
  }
}

class Book {
  #title;
  #author;
  #publicationDate;

  genre;
  publisher;

  constructor(title, author, publicationDate, genre, publisher) {
    this.#title = title;
    this.#author = author;
    this.#publicationDate = publicationDate;
    this.genre = genre;
    this.publisher = publisher;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get publicationDate() {
    return this.#publicationDate;
  }
}

class Author {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

class Publisher {

  constructor(name, website, collection = []) {
    this.name = name;
    this.website = website;
    this.collection = collection
  }
}

const test = new Library
test.books.push('test')
console.log(test.books)


export { Library, Book, Author, Publisher };
