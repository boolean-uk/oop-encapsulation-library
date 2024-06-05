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
        const myBook = new Book("", "John Steinbeck", "1939", "classic fiction")
      library.addBook(myBook.bookCopy)

    }).toThrowError(
      "This library requires a book with a title, author, genre, and year"
    );
  });

  it("should accept a book with an author with details", () => {
    const myAuthor = new Author("Robin Hobb", "60", "robin@hobb.com");
    const myPublisher = new Publisher("Penguin", 'www.penguin.com', ['Example Book 1'])
    const myBook = new Book(
      "Assassin's Apprentice",
      myAuthor,
      "2001",
      "fantasy",
      myPublisher
    );
    
    library.addBook(myBook.bookCopy);
    
    expect(library.books[0].author.age).toEqual('60');
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
      library.addBook(myBook.bookCopy);
    }).toThrowError(
      "Books being added to this library require the author to have a name, age, and email address"
    );
  });

  it('requires books to have a publisher with name, website, and collection', () => {
    const myAuthor = new Author("Robin Hobb", "60", "robin@hobb.com");
    const myPublisher = new Publisher("Penguin", 'www.penguin.com', ['Example Book 1'])
    const myBook = new Book("Assassin's Apprentice", myAuthor, '2001', "fantasy", myPublisher
    )
    library.addBook(myBook.bookCopy)

    expect(library.books[0].publisher.name).toEqual("Penguin")
  })

  it('requires books to have a publisher with name, website, and collection', () => {
    const myAuthor = new Author("Robin Hobb", "60", "robin@hobb.com");
    const myPublisher = new Publisher("Penguin", '', ['Example Book 1'])
    const myBook = new Book("Assassin's Apprentice", myAuthor, '2001', "fantasy", myPublisher
    )
    
    expect(() => {library.addBook(myBook.bookCopy)}).toThrowError("Books being added to this library require a publisher with name and website")
  })

  it("requires that a publisher's collection contains the book to be added", () => {
    const myAuthor = new Author("Robin Hobb", "60", "robin@hobb.com");
    const myBook = new Book("Assassin's Apprentice", myAuthor, '2001', "fantasy")
    expect(() => {library.addBook(myBook.bookCopy)}).toThrowError("Publisher's collection should contain book to be published")

    myBook.publisher = new Publisher("Penguin", '', [myBook])    
    library.addBook(myBook.bookCopy)
    expect(library.books.length).toEqual(1)
  })
});



describe("Author", () => {
  it("should have a name, age, and email", () => {
    const myAuthor = new Author("Robin Hobb", "60", "robin@hobb.com");

    expect(myAuthor.name).toEqual("Robin Hobb");
  });
});
