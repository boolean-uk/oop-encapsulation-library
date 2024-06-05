import Library from "../src/library.js"

describe('Library', () => {
    let library

    beforeEach(() => {
        library = new Library()
    })

    it('should exist', () => {
        expect(library).toBeInstanceOf(Library)
    })

    it('should be able to add a book', () => {
        library.addBook('Game of Thrones', 'George R.R. Martin', 'Fantasy', '01-08-1996')

        expect(library.books.length).toBe(1)
        expect(library.books[0].title).toBe('Game of Thrones')
    })

    it('should be able to remove a book', () => {
        library.addBook('Game of Thrones', 'George R.R. Martin', 'Fantasy', '01-08-1996')
        library.addBook('The Ruins of Gorlan', 'John Flanagan', 'Fantasy', '01-11-2004')

        const removed = library.removeBook('The Ruins of Gorlan', 'John Flanagan')

        expect(library.books.length).toBe(1)
        expect(library.books[0].title).toBe('Game of Thrones')
        expect(removed.title).toBe('The Ruins of Gorlan')
    })
})