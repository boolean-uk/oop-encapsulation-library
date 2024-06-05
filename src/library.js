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

    if (!book.author.name || !book.author.age || !book.author.email) {
        throw new Error('Books being added to this library require the author to have a name, age, and email address')
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

class Publisher {
    constructor(name, website, collection) {
        this.name = name
        this.website = website
        this.collection = collection
    }
}


export { Library, Book, Author, Publisher };
