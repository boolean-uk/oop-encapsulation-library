import Book from '../src/Book.js';
import Author from '../src/Author.js';
import Publisher from '../src/Publisher.js';
import Library from '../src/Library.js';

describe('Library System', () => {
    let author, publisher, book, library;

    beforeEach(() => {
        author = new Author("George R.R. Martin", 72, "grrm@example.com");
        publisher = new Publisher("Bantam Books", "http://bantambooks.com");
        book = new Book("A Game of Thrones", author, "Fantasy", "1996-08-06", publisher);
        publisher.addBook(book);
        library = new Library();
    });

    it('should add a book to the library', () => {
        library.addBook(book);
        expect(library.listBooks()).toContain(book);
    });

    it('should not add a book if publisher does not list it', () => {
        const unlistedBook = new Book("Unlisted Book", author, "Fiction", "2024-06-08", publisher);
        expect(() => library.addBook(unlistedBook)).toThrowError("Publisher does not list this book.");
    });

    it('should remove a book from the library', () => {
        library.addBook(book);
        library.removeBook(book.title);
        expect(library.listBooks()).not.toContain(book);
    });

    it('should list all books in the library', () => {
        library.addBook(book);
        expect(library.listBooks()).toEqual([book]);
    });

    it('should search books by genre', () => {
        library.addBook(book);
        expect(library.searchByGenre("Fantasy")).toEqual([book]);
    });

    it('should search books by author', () => {
        library.addBook(book);
        expect(library.searchByAuthor("George R.R. Martin")).toEqual([book]);
    });

    it('should search books by publisher', () => {
        library.addBook(book);
        expect(library.searchByPublisher("Bantam Books")).toEqual([book]);
    });
});
