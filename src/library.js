import { Book } from "./book.js"

class Library{
  #booksList
  constructor(){
    this.#booksList = []
  }

  get booksList(){
    return structuredClone(this.#booksList)
  }

  add(bookName){
    const found = this.#booksList.find((book) => {
      return book.title === bookName.title
    })
    
    console.log('entrance', found)
    if(!found){
      console.log('added')
      this.#booksList.push(bookName)
    } else {
      throw new Error(`The '${bookName.title}' already exist in you Library!` )
    }    
  }

  remove(bookName) {
    const found = this.#booksList.find((book) => {
      return book.title === bookName.title
    })
    if(found){
      this.#booksList = this.#booksList.filter((book) => {
        return book.title !== found.title
      })
    } else {
      throw new Error(`The '${bookName.title}' dose not exist in you Library!` )
    }
  }
}

export { Library }

const myLibrary = new Library()
const gotBook1 = new Book('Game of Throns', 'George R. R. Martin','Fantasy', '1991')
const HPBook1 = new Book('Harry Potter and the Stone', 'G. K. Rowling','Fantasy', '1997')
const HPBook2 = new Book('Harry Potter and Chamber of Secrets', 'G. K. Rowling','Fantasy', '1998')
const HPBook3 = new Book('Harry Potter and the Azkaban', 'G. K. Rowling','Fantasy', '1999')


console.log('test1', myLibrary.booksList)
myLibrary.add(gotBook1.getBook)
// myLibrary.add(gotBook1.getBook)
myLibrary.add(HPBook1.getBook)

console.log('test2', myLibrary.booksList)

myLibrary.remove(HPBook1.getBook)
// myLibrary.add(gotBook1.getBook)

console.log('test2', myLibrary.booksList)