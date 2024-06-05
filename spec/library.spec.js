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

    it('should be able to remove books', () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 'Fantasy', 'August 1, 1996')
        library.addBook("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 'Fantasy', 'June 26, 1997')

        library.removeBook('A Game of Thrones')

        expect(library.listBooks()).toEqual([
            new Book(
                "Harry Potter and the Philosopher's Stone", 
                'J. K. Rowling', 
                'Fantasy', 
                'June 26, 1997'
            )
        ])
    })

    it('should be able to list the books', () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 'Fantasy', 'August 1, 1996')
        library.addBook("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 'Fantasy', 'June 26, 1997')
        library.addBook('The Hobbit', 'J. R. R. Tolkien', 'Fantasy', 'September 21, 1937')

        expect(library.listBooks()).toEqual([
            new Book(
                'A Game of Thrones', 
                'George R. R. Martin', 
                'Fantasy', 
                'August 1, 1996'
            ),
            new Book(
                "Harry Potter and the Philosopher's Stone", 
                'J. K. Rowling', 
                'Fantasy', 
                'June 26, 1997'
            ),
            new Book(
                'The Hobbit', 
                'J. R. R. Tolkien', 
                'Fantasy', 
                'September 21, 1937'
            )
        ])
    })
})