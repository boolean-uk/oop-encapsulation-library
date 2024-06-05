import Library, { Book } from "../src/library.js";

describe('Library', () => {
    let library

    beforeEach(() => {
        library = new Library()
    })

    it('should be able to add a book to the collection', () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 'Fantasy', 'August 1, 1996')

        expect(library.collectionList()).toEqual([
            {
                title: 'A Game of Thrones',
                author: 'George R. R. Martin',
                genre: 'Fantasy',
                publicationDate: 'August 1, 1996'
            }
        ])
    })

    it('should be able to remove an book from the collection', () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 'Fantasy', 'August 1, 1996')
        library.addBook("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 'Fantasy', 'June 26, 1997')

        library.removeBook('A Game of Thrones')

        expect(library.collectionList()).toEqual([
            {
                title: "Harry Potter and the Philosopher's Stone",
                author: 'J. K. Rowling',
                genre: 'Fantasy',
                publicationDate: 'June 26, 1997'
            }
        ])
    })

    it('should be able to list the collection', () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 'Fantasy', 'August 1, 1996')
        library.addBook("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 'Fantasy', 'June 26, 1997')

        expect(library.collectionList()).toEqual([
            {
                title: 'A Game of Thrones',
                author: 'George R. R. Martin',
                genre: 'Fantasy',
                publicationDate: 'August 1, 1996'
            },
            {
                title: "Harry Potter and the Philosopher's Stone",
                author: 'J. K. Rowling',
                genre: 'Fantasy',
                publicationDate: 'June 26, 1997'
            }
        ])
    })

    it("should be only able to modify book's genre", () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 'Drama', 'August 1, 1996')

        expect(() => library.collection[0].title = 'The Hobbit').toThrowError()
        expect(() => library.collection[0].author = 'J. R. R. Tolkien').toThrowError()
        expect(() => library.collection[0].publicationDate = 'September 21, 1937').toThrowError()

        library.collection[0].genre = 'Fantasy'

        expect(library.collectionList()).toEqual([
            {
                title: 'A Game of Thrones',
                author: 'George R. R. Martin',
                genre: 'Fantasy',
                publicationDate: 'August 1, 1996'
            }
        ])
    })

    it("should throw an error if the book's title, author, genre or publicationDate not provided correctly", () => {
        expect(() => library.addBook('A Game of Thrones', '', 'Drama', 'August 1, 1996')).toThrowError("Book's properties should be provided correctly")

        expect(() => library.addBook('A Game of Thrones', 'George R. R. Martin', 'Drama', 1996)).toThrowError("Book's properties should be provided correctly")
    }) 

    it('should throw an error if trying to remove an unfound book', () => {
        expect(() => library.removeBook('A Game of Thrones')).toThrowError('Book not found')
    })
})