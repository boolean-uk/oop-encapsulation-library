import { Library, Book } from '../src/library.js'

describe('Book', () => {
    it('should create a book with given details', () => {
        const book = new Book('We', 'Yevgeny Zamyatin', 'Dystopian Fiction', '1924')
        expect(book.getTitle()).toBe('We')
        expect(book.getAuthor()).toBe('Yevgeny Zamyatin')
        expect(book.getGenre()).toBe('Dystopian Fiction')
        expect(book.getPublicationYear()).toBe('1924')
    })

    it('should keep the title, author and publication year immutable', () => {
       const book = new Book ('We', 'Yevgeny Zamyatin', 'Dystopian Fiction', '1924')
       expect(book.getTitle()).toBe('We')
       expect(book.getAuthor()).toBe('Yevgeny Zamyatin')
       expect(book.getGenre()).toBe('Dystopian Fiction')
       expect(book.getPublicationYear()).toBe('1924')
    })

    it('should throw an error if any book detail is missing', () => {
        expect(() => new Book('', 'Yevgeny Zamyatin', 'Dystopian Fiction', '1924')).toThrowError('All book details must be provided')
        expect(() => new Book('We', '', 'Dystopian Fiction', '1924')).toThrowError('All book details must be provided')
        expect(() => new Book('We', 'Yevgeny Zamyatin', '', '1924')).toThrowError('All book details must be provided')
        expect(() => new Book('We', 'Yevgeny Zamyatin', 'Dystopian Fiction', '')).toThrowError('All book details must be provided')
    })
})

describe('Library', () => {
    let library

    beforeEach(() => {
        library = new Library()
    })

    it('should add a book to the library catalogue', () => {
        library.addBook('We', 'Yevgeny Zamyatin', 'Dystopian Fiction', '1924')
        expect(library.listBooks()).toContain('We')
    })

    it('should not add a duplicate book to the library catalogue', () => {
        library.addBook('We', 'Yevgeny Zamyatin', 'Dystopian Fiction', '1924')
        library.addBook('We', 'Yevgeny Zamyatin', 'Dystopian Fiction', '1924')
        expect(library.listBooks().length).toBe(1)
    })

    it('should not add a book if any detail is missing', () => {
        expect(() => library.addBook('', 'Yevgeny Zamyatin', 'Dystopian Fiction', '1924')).toThrowError('All book details must be provided')
        expect(() => library.addBook('We', '', 'Dystopian Fiction', '1924')).toThrowError('All book details must be provided')
        expect(() => library.addBook('We', 'Yevgeny Zamyatin', '', '1924')).toThrowError('All book details must be provided')
        expect(() => library.addBook('We', 'Yevgeny Zamyatin', 'Dystopian Fiction', '')).toThrowError('All book details must be provided')
        expect(library.listBooks()).toEqual([])
    })

    it('should remove a book from the library', () => {
        library.addBook('We', 'Yevgeny Zamyatin', 'Dystopian Fiction', '1924')
        library.removeBook('We')
        expect(library.listBooks()).not.toContain('We')
    })

    it('should not remove a non-existent book from the library', () => {
        library.removeBook('We')
        expect(library.listBooks()).not.toContain('We')
    })

    it('should list books in the library', () => {
        library.addBook('We', 'Yevgeny Zamyatin', 'Dystopian Fiction', '1924')
        library.addBook('The Chimp Paradox', 'Prof Steve Peters', 'Self-Help', '2012')
        expect(library.listBooks()).toEqual(['We', 'The Chimp Paradox'])
    })
})

