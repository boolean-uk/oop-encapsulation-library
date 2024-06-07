export default class Library{
    #books
    #bookId
 constructor() {
this.#books = []
this.#bookId = 1
 }

 addBook(book) {
    book.setId(this.#bookId)
    this.#bookId++
    this.#books.push(book);
    return book.getId()
  }

  list() {
    return this.#books
  }
}

class Book{
    #title;
    #author;
    #publicationDate;
    #publisher;
    #id;
    constructor(title, author, genre, publicationDate, publisher) {
        this.#title = title;
        this.#author = author;
        this.genre = genre;
        this.#publicationDate = publicationDate;
        this.#publisher = publisher;
      }
    
      getTitle() {
        return this.#title;
      }
    
      getAuthor() {
        return this.#author;
      }
    
      setGenre(genre) {
        this.genre = genre;
      }
    
      getPublicationDate(){
        return this.#publicationDate
      }
    
      getGenre() {
        return this.genre;
      }
    
      setId(id){
        this.#id = id
      }
    
      getId(){
        this.#id
      }


}

//class Author{}

/*/class Publisher{
    constructor(name, websiteURL){
        this.name = name
        this.websiteURL = websiteURL
    }
//}*/
export { Book }