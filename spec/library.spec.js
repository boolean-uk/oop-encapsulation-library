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

