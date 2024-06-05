import Library, { Author, Publisher } from "../src/library.js"

describe('Library', () => {
    let library
    let george
    let penguin

    beforeEach(() => {
        library = new Library()
        george = new Author('George R.R. Martin', 80, 'georgie@hotmail.com')
        penguin = new Publisher('penguin', 'somewebsite')
    })

    it('should exist', () => {
        expect(library).toBeInstanceOf(Library)
    })

    it('should be able to add a book', () => {
        
        library.addBook('Game of Thrones', george, 'Fantasy', '01-08-1996', penguin)

        expect(library.books.length).toBe(1)
        expect(library.books[0].title).toBe('Game of Thrones')
    })

    it('should be able to remove a book', () => {
        const john = new Author('John Flanagan', 40, 'johnny@hotmail.com')

        library.addBook('Game of Thrones', george, 'Fantasy', '01-08-1996', penguin)
        library.addBook('The Ruins of Gorlan', john, 'Fantasy', '01-11-2004',penguin)

        const removed = library.removeBook('The Ruins of Gorlan')

        expect(library.books.length).toBe(1)
        expect(library.books[0].title).toBe('Game of Thrones')
        expect(removed.title).toBe('The Ruins of Gorlan')
    })

    it('should throw an error when not providing all author and publisher details when adding a book', () => {
        const john = new Author('John Flanagan', 40,)
        const banana = new Publisher('banana',)

        expect(() => library.addBook('The Ruins of Gorlan', john, 'Fantasy', '01-11-2004',penguin)).toThrow(
            'author must have a name, age and email'
          )

          expect(() => library.addBook('Game of Thrones', george, 'Fantasy', '01-08-1996', banana)).toThrow(
            'publisher must have a name and website'
          )
    })
})