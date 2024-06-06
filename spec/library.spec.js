import Library, { Book, Author } from '../src/library.js'

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
            author: {
                name: 'Tom T. Thompson',
                age: 200,
                email: 'Tom@Tomspace.com',
            },
            title: 'Tom Takes Tomorrow',
            publicationDate: '24/06/2002',
            genre: 'Action Adventure',
        }

        library.addBook(newBook)

        expect(library.displayBooks()[0].author.name).toBe('Tom T. Thompson')
        expect(library.displayBooks()[0].title).toBe('Tom Takes Tomorrow')
    })

    it('succesfully removes the a book', () => {
        const newBook = {
            author: {
                name: 'Tom T. Thompson',
                age: 200,
                email: 'Tom@Tomspace.com',
            },
            title: 'Tom Takes Tomorrow',
            publicationDate: '24/06/2002',
            genre: 'Action Adventure',
        }

        const bookToDelete = {
            author: {
                name: 'Delete Me',
                age: 100,
                email: 'delete@deletion.com',
            },
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
