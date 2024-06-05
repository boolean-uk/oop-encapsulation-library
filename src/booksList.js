import { Book } from "./book.js"

Book
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
      // console.log('New Book Added: ', this.#booksStoreList)
    }
  }

  get showBooksList(){
    return [...this.#booksStoreList]
  }
}


const bookStore = new BooksStore()
const gotBook1 = new Book('Game of Throns', 'George R. R. Martin','Fantasy', '1991')
const HPBook1 = new Book('Harry Potter and the Stone', 'G. K. Rowling','Fantasy', '1997')
const HPBook2 = new Book('Harry Potter and Chamber of Secrets', 'G. K. Rowling','Fantasy', '1998')
const HPBook3 = new Book('Harry Potter and the Azkaban', 'G. K. Rowling','Fantasy', '1999')

bookStore.add(gotBook1.getBook())
bookStore.add(HPBook1.getBook())
bookStore.add(HPBook2.getBook())
bookStore.add(HPBook3.getBook())


console.log('test', bookStore.showBooksList)