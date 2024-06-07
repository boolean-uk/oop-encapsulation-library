class BooksStore{
  #booksStoreList
  
  constructor(){
    this.#booksStoreList = []
  }

  add(bookName) {
    const newBook = this.#booksStoreList.find((book) => book.title === bookName.title)
    if(newBook){
      throw new Error(`The '${bookName.title}' Book exist in BoosList`)
    } else {
      this.#booksStoreList.push(bookName)
    }
  }

  get showBooksList(){
    return [...this.#booksStoreList]
  }
}

export { BooksStore }