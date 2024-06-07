import { Book } from "../src/book.js";

describe('Book', () => {
  let gotBook1
  let hPBook1
  let hPBook2

  beforeEach(() => {
    gotBook1 = new Book('Game of Throns', 'George R. R. Martin','Fantasy', '1991')
    hPBook1 = new Book('Harry Potter and the Stone', 'G. K. Rowling','Fantasy', '1997')
    hPBook2 = new Book('Harry Potter and Chamber of Secrets', 'G. K. Rowling','Fantasy', '1998')
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