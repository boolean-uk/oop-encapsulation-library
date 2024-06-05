import { Library, Book, Author, Publisher } from "../src/library.js";

describe("Library", () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  it("should be a class that can be instantiated", () => {
    expect(library).toBeInstanceOf(Library);
  });

  it("should throw an error if we add a book without a name, author, genre, or year", () => {
    expect(() => {
      library.addBook(
        new Book("", "John Steinbeck", "1939", "classic fiction")
      );
    }).toThrowError(
      "This library requires a book with a title, author, genre, and year"
    );
  });

  it("should accept a book with an author class as its author", () => {
    const myAuthor = new Author("Robin Hobb", "60", "robin@hobb.com");
    const myBook = new Book(
      "Assassin's Apprentice",
      myAuthor,
      "2001",
      "fantasy"
    );
    library.addBook(myBook);

    expect(library.books[0].author.name).toEqual("Robin Hobb");
  });

  it("should reject a book if its author it misses either a name, age, or email", () => {
    const myAuthor = new Author("Robin Hobb", "", "robin@hobb.com");
    const myBook = new Book(
      "Assassin's Apprentice",
      myAuthor,
      "2001",
      "fantasy"
    );
    
    expect(() => {
      library.addBook(myBook);
    }).toThrowError(
      "Books being added to this library require the author to have a name, age, and email address"
    );
  });
});

describe("Author", () => {
  it("should have a name, age, and email", () => {
    const myAuthor = new Author("Robin Hobb", "60", "robin@hobb.com");

    expect(myAuthor.name).toEqual("Robin Hobb");
  });
});
