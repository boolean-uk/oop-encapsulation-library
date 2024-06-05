class Book {
  constructor(title, author, date) {
    this.title = title;
    this.author = author;
    this.publicationDate = date;
    Object.freeze(this)
  }
}

class Library {
  #books;
  constructor() {
    this.#books = [];
  }
  set books(book) {
    if(typeof book !== 'object') {
        throw 'book is not valid'
    }
    this.#books.push(book)
  }
  add(book) {
    this.#books.push(book);
  }
  remove(book) {
    const found = this.#books.find((b) => b.title === book.title);
    const index = this.#books.indexOf(book)
    const newLibray = this.#books.splice(index, 1)

    if (!found) {
      throw "book not found";
    }
    return newLibray;
  }
  get books() {
    return [...this.#books];
  }
}

const book = new Book('The Corporation', 'TJ English', '13 March 2018')
const book1 = new Book('Born to run', 'Christopher McDougall', '5 May 2009')
const book3 = new Book('The story of film', 'Mark Cousins', '2004')
const book4 = new Book('Fingerprints of the gods', 'Graham Hancock', '1995s')
const library = new Library()
library.add(book)
library.add(book1)
library.add(book3)
library.add(book4)


