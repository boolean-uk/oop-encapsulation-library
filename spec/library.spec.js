import Library, { Book } from "../src/library.js";

describe('Library', () => {
    let library

    beforeEach(() => {
        library = new Library()
    })

    it('should be able to add books', () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 'Fantasy', 'August 1, 1996')

        expect(library.listBooks()).toEqual([
            new Book(
                'A Game of Thrones', 
                'George R. R. Martin', 
                'Fantasy', 
                'August 1, 1996'
            )
        ])
    })
})