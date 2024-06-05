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
        console.log(library.books)
        expect(library.books.length).toBe(1)
        expect(library.books[0].title).toBe('The Corporation')
    })
})