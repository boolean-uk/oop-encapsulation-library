class Library{
  #booksList
  constructor(){
    this.#booksList = []
  }

  add(bookName){
    const newBook = books.find((book) => book.bName === bookName )
    this.#booksList.push(newBook)
  }
}