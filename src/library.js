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
        "This library requires a book with a title, author, genre, and year"
      );
    }

    if (!book.author.name || !book.author.age || !book.author.email) {
      throw new Error(
        "Books being added to this library require the author to have a name, age, and email address"
      );
    }

    if (!book.publisher.name || !book.publisher.website || !book.publisher.collection.includes(book.title)) {
      throw new Error(
        "Books being added to this library require a publisher with name, website, and this book in their collection"
      );
    }

    this.#books.push(book);
  }
}

class Book {
  #title;
  #author;
  #publicationDate;
  constructor(title, author, publicationDate, genre, publisher) {
    this.#title = title;
    this.#author = author;
    this.#publicationDate = publicationDate;
    this.genre = genre;
    this.publisher = publisher;
  }

  get bookCopy() {
    return {
      title: this.#title,
      author: this.#author,
      publicationDate: this.#publicationDate,
      genre: this.genre,
      publisher: this.publisher,
    };
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
    this.collection = collection;
  }
}

// const myLibrary = new Library()
// const myAuthor = new Author("Robin Hobb", "60", "robin@hobb.com");
// const myPublisher = new Publisher("Penguin", 'www.penguin.com', [])
// const myBook = new Book("Assassin's Apprentice", myAuthor, '2001', "fantasy", myPublisher
// )
// myBook.publisher.collection.push(myBook.bookCopy.title)

// console.log(myBook.bookCopy.title)
// console.log(myBook.bookCopy.publisher.collection)

// myLibrary.addBook(myBook.bookCopy)
export { Library, Book, Author, Publisher };
