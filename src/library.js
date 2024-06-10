export default class Library {
    #books;
    #bookId
    constructor() {
      this.#books = [];
      this.#bookId = 1
    }
  
    addBook(book) {
      book.id = this.#bookId
      this.#bookId++
      this.#books.push(book);
      return book.id
    }
  
    removeBook(bookId) {
      let updatedBooks = this.#books.filter(book => book.id !== bookId)
      this.#books = updatedBooks
    }
  
    list() {
      return this.#books
    }
  }
  
  export class Book {
    #title;
    #author;
    #genre;
    #publicationDate;
    #publisher;
    #id;
    constructor(title, author, genre, publicationDate, publisher) {
      this.#title = title;
      this.#author = author;
      this.#genre = genre;
      this.#publicationDate = publicationDate;
      this.#publisher = publisher;
      this.#id = null
    }
  
    get title() {
      return this.#title;
    }
  
    get author() {
      return this.#author;
    }
  
    set author(author){
      return this.#author = author
    }
  
    set genre(genre) {
      this.#genre = genre;
    }
  
    get publicationDate(){
      return this.#publicationDate
    }
  
    get genre() {
      return this.#genre;
    }
  
    set id(id){
      this.#id = id
    }
  
    get id(){
      return this.#id
    }
  
    get publisher(){
      return this.#publisher
    }
  }
  
  export class Author {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  }
  
  export class Publisher {
    constructor(name, websiteURL) {
      this.name = name;
      this.websiteURL = websiteURL;
    }
  }
  