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
    get books() {
        return [...this.#books];
      }
   
  }
  
 
