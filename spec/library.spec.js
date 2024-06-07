import { Book } from "../src/book.js";
import { Library } from "../src/library.js";

describe('Book', () => {
  let gotBook1

  beforeEach(() => {
    gotBook1 = new Book('Game of Throns', 'George R. R. Martin','Fantasy', '1991')
  })

  it('should exist', () => {
    expect(gotBook1).toBeInstanceOf(Book)
  })

  it('should return info of the book', () => {
    expect(gotBook1.getBook).toEqual({
      title : 'Game of Throns',
      author : 'George R. R. Martin',
      genre : 'Fantasy',
      pDate : '1991'
    })
  })
})

describe('Library', () => {
  let booksList
  let gotBook1
  let hPBook1

  beforeEach(() => {
    booksList = new Library()
    gotBook1 = new Book('Game of Throns', 'George R. R. Martin','Fantasy', '1991')
    hPBook1 = new Book('Harry Potter and the Stone', 'G. K. Rowling','Fantasy', '1997')
  })

  it('should exist', () => {
    expect(booksList).toBeInstanceOf(Library)
  })

  it('should add book to the bookList', () => {
    booksList.add(gotBook1.getBook)
    expect(booksList.booksList.length).toBe(1)
  })

  it('should remove the book', () => {
    booksList.add(gotBook1.getBook)
    booksList.remove(gotBook1.getBook)
    expect(booksList.booksList.length).toBe(0)
  })

  it('should return list of books', () => {
    booksList.add(gotBook1.getBook)
    booksList.add(hPBook1.getBook)

    expect(booksList.booksList).toEqual([ Object({ title: 'Game of Throns', author: 'George R. R. Martin', genre: 'Fantasy', pDate: '1991' }), Object({ title: 'Harry Potter and the Stone', author: 'G. K. Rowling', genre: 'Fantasy', pDate: '1997' })] )
  })
})

// describe('BooksList', () => {
//   let gotBook1
//   let hPBook1
//   let bookStore
//   beforeEach(() => {
//     gotBook1 = new Book('Game of Throns', 'George R. R. Martin','Fantasy', '1991')
//     hPBook1 = new Book('Harry Potter and the Stone', 'G. K. Rowling','Fantasy', '1997')
//     bookStore = new BooksStore()
//   })

//   it('should exist', () => {
//     expect(bookStore).toBeInstanceOf(BooksStore)
//   })

//   it('should add books to the store', () => {
//     bookStore.add(gotBook1.getBook)
//   })
// })