import { Library, Book } from '../src/library.js'

describe ('Library', ()=> {
    let library;

    beforeEach(()=> {
        library = new Library()
    })

    it('should be a class that can be instantiated', () => {
        expect(library).toBeInstanceOf(Library)
    })

    it('should have an add book function that requires a book with title, author, and publication date', () => {
        library.addBook(new Book('The Grapes of Wrath', 'John Steinbeck', '1939', 'classic fiction'))

        expect(library.books[0].title).toEqual('The Grapes of Wrath')
    })

    it('should throw an error if we add a book without a name, author, genre, or year', () => {

        expect(() => {library.addBook(new Book('', 'John Steinbeck', '1939', 'classic fiction'))}).toThrowError('This library requires a book with a title, author, genre, and year')
    })
})