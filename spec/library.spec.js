import Library, { Book } from "../src/library.js";

describe("Library", () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  it("should exist", () => {
    expect(library).toBeInstanceOf(Library);
  });

  it("should add book to books library", () => {
    library.addBook("Harry Potter", "J.K. Rowling", 1997, "fantasy");

    expect(library.books.length).toBe(1);
    expect(library.books[0].id).toBe(1);
    expect(library.books[0].title).toBe("Harry Potter");
  });

  it("should remove book from books library by id", () => {
    library.addBook("Harry Potter", "J.K. Rowling", 1997, "fantasy");

    library.removeBook(1);

    expect(library.books.length).toBe(0);
  });

  it("should throw an error if the book to remove is not found or the id provided is incorrect or it's not a number", () => {
    library.addBook("Harry Potter", "J.K. Rowling", 1997, "fantasy");

    expect(() => library.removeBook("1")).toThrow(
      new Error(
        "The book with id 1 is not found! May be the book does not exist or the ID provided is incorrect or it not a number"
      )
    );
  });

  it("should not allow to change books from out side ", () => {
    library.addBook("Harry Potter", "J.K. Rowling", 1997, "fantasy");

    expect(() => (library.books = [])).toThrow(
      new TypeError(
        "Cannot set property books of #<Library> which has only a getter"
      )
    );
  });

  it("should not allow to change the id, title, author and publication date of a book after creation", () => {
    library.addBook("Harry Potter", "J.K. Rowling", 1997, "fantasy");

    library.books[0].id = 2;
    library.books[0].title = "banana";
    library.books[0].author = "another banana";
    library.books[0].publicationDate = 1111;

    expect(library.books[0].id).toBe(1);
    expect(library.books[0].title).toBe("Harry Potter");
    expect(library.books[0].author).toBe("J.K. Rowling");
    expect(library.books[0].publicationDate).toBe(1997);
  });

  it("should not allow to set the book genre outside of the library class", () => {
    library.addBook("Harry Potter", "J.K. Rowling", 1997, "fantasy");

    library.books[0].genre = "Horror";

    expect(library.books[0].genre).toBe("fantasy");
  });

  it("should allow to set the book genre only from inside of the library class", () => {
    library.addBook("Harry Potter", "J.K. Rowling", 1997, "fantasy");

    library.setGenre(1, "Horror");

    expect(library.books[0].genre).toBe("Horror");
  });

  it("should throw an error if the book is not found or the id provided is incorrect or it's not a number", () => {
    library.addBook("Harry Potter", "J.K. Rowling", 1997, "fantasy");

    expect(() => library.setGenre(3, "Horror")).toThrow(
      new Error(
        "The book with id 3 is not found! May be the book does not exist or the ID provided is incorrect or it not a number"
      )
    );
  });
});
