import { Book } from '../src/library.js'

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
        expect(() => {
            book.title = 'We'
        }).toThrow()
        expect(() => {
            book.author = 'Yevgeny Zamyatin'
        }).toThrow()
        expect(() => {
            book.getPublicationYear = '1924'
        }).toThrow()
    })
})

