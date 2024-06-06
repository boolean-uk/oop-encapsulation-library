export default class Book {
  #title;
  #author;
  #genre;
  #publicationDate;
  constructor(title, author, genre, publicationDate) {
    this.#title = title;
    this.#author = author;
    this.#genre = genre;
    this.#publicationDate = publicationDate;
  }
  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get genre() {
    return this.#genre;
  }

  set genre(newGenre) {
    this.#genre = newGenre;
  }

  get publicationDate() {
    return this.#publicationDate;
  }
}
