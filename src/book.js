class Book{
  #title
  #author
  #genre
  #pDate
  constructor(title, author, genre, pDate){
    this.#title = title
    this.#author = author
    this.#genre = genre
    this.#pDate = pDate
    
  }

  get getBook(){
    return {
      title : this.#title,
      author : this.#author,
      genre : this.#genre,
      pDate : this.#pDate
    }
  }
}

export { Book }