import Library from "../src/library.js";
import Book from "../src/book.js";

describe("Library", function () {
  let library, book1, book2;

  beforeEach(function () {
    library = new Library();
    book1 = new Book(
      "Diary of a wimpy kid",
      "Jeff Kinney",
      "Comedy",
      "01/03/2007"
    );
    book2 = new Book(
      "To Kill a Mockingbird",
      "Harper Lee",
      "Fiction",
      "11/07/1960"
    );
  });

  it("should add a book to the library", function () {
    library.addBook(book1);
    expect(library.books).toContain(book1);
  });

  it("should throw an error when adding a non-book instance", function () {
    expect(() => library.addBook({})).toThrowError(
      "Only Book instances can be added to the library"
    );
  });

  it("should remove a book from the library", function () {
    library.addBook(book1);
    library.removeBook("Diary of a wimpy kid");
    expect(library.books).not.toContain(book1);
  });

  it("should throw an error when removing a book that does not exist", function () {
    expect(() => library.removeBook("Nonexistent Book")).toThrowError(
      "Book not found in the library"
    );
  });

  it("should list all books in the library", function () {
    library.addBook(book1);
    library.addBook(book2);
    const booksList = library.listBooks();
    expect(booksList).toContain(
      "Diary of a wimpy kid by Jeff Kinney, Genre: Comedy, Published: 01/03/2007"
    );
    expect(booksList).toContain(
      "To Kill a Mockingbird by Harper Lee, Genre: Fiction, Published: 11/07/1960"
    );
  });
});
