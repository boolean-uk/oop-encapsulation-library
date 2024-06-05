import Library, { Book } from '../src/library.js'

describe('library', () => {
    let library

    beforeEach(() => {
        library = new Library()
    })

    it('should be an instance of the class', () => {
        expect(library).toBeInstanceOf(Library)
    })

    it('should initialise an empty array', () => {
        expect(library.displayBooks().length).toBe(0)
    })

    it('should add a book to the array of books', () => {
        const newBook = {
            author: 'Tom T. Thompson',
            title: 'Tom Takes Tomorrow',
            publicationDate: '24/06/2002',
            genre: 'Action Adventure',
        }

        library.addBook(newBook)

        expect(library.displayBooks()[0]).toEqual(newBook)
    })

    it('succesfully removes the a book', () => {
        const newBook = {
            author: 'Tom T. Thompson',
            title: 'Tom Takes Tomorrow',
            publicationDate: '24/06/2002',
            genre: 'Action Adventure',
        }

        const bookToDelete = {
            author: 'Delete Me',
            title: 'Get Deleted',
            publicationDate: '10/02/1889',
            genre: 'Nothing',
        }

        library.addBook(newBook) 
        library.addBook(bookToDelete)

        library.removeBook('Delete Me', 'Get Deleted')

        expect(library.displayBooks().length).toBe(1)
    })
})
