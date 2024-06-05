import Library, { Book } from "../src/library.js";

describe('Library', () => {
    let library
    let book

    beforeEach(() => {
        library = new Library()
        book = new Book()
    })
    it('should create a new book', () => {
        const expected = new Book("The Corporation", "TJ English", "13 March 2018")
        expect(expected).toBeInstanceOf(Book)
        expect(expected.title).toBe('The Corporation')
    })
    it('should add the book to the library', () => {
        const book = new Book("The Corporation", "TJ English", "13 March 2018")
        library.add(book)
        expect(library.books.length).toBe(1)
        expect(library.books[0].title).toBe('The Corporation')
    })
    it('should get all books', () => {
        const book = new Book("The Corporation", "TJ English", "13 March 2018")
        library.add(book)
        const book1 = new Book("Born to run", "Christopher McDougall", "5 May 2009")
        library.add(book1)
        library.books
        expect(library.books.length).toBe(2)
    })
})