import { Library, Book, Author, Publisher } from "../src/library.js";

describe("Library", () => {
  let library;
  let testPublisher;
  let testAuthor;
  let testBook;

  beforeEach(() => {
    library = new Library();
    testPublisher = new Publisher("Penguin", 'www.penguin.com', [])
    testAuthor = new Author("Robin Hobb", "60", "robin@hobb.com");
    testBook = new Book("Assassin's Apprentice", testAuthor, '2001', "fantasy", testPublisher)

  });

  it("should be a class that can be instantiated", () => {
    expect(library).toBeInstanceOf(Library);
  });

  it("should throw an error if we add a book without a name, author, genre, or year", () => {
    const myBook = new Book("", "John Steinbeck", "1939", "classic fiction")
    expect(() => {
      library.addBook(myBook)}).toThrowError(
      "This library requires a book with a title, author, genre, and year"
    );
  });

  it("should accept a book with an author with details", () => {
    testBook.publisher.collection.push(testBook)
    library.addBook(testBook);
    
    expect(library.books[0].author.age).toEqual('60');
  });

  it("should reject a book if its author misses either a name, age, or email", () => {
    const test2Author = new Author("Robin Hobb", "", "robin@hobb.com");
    const test2Book = new Book(
      "Assassin's Apprentice",
      test2Author,
      "2001",
      "fantasy"
    );
    
    expect(() => {
      library.addBook(test2Book);
    }).toThrowError(
      "Books being added to this library require the author to have a name, age, and email address"
    );
  });

  it('requires books to have a publisher with name, website, and collection', () => {
    testBook.publisher.collection.push(testBook)
    library.addBook(testBook)

    expect(library.books[0].publisher.name).toEqual("Penguin")
  })

  it('requires books to have a publisher with name, website, and collection containing book to be added', () => {
    
    expect(() => {library.addBook(testBook)}).toThrowError("Books being added to this library require a publisher with name, website, and this book in their collection")
  })

  it("should accept books that are contained within their publishers collection", () => {
    testBook.publisher.collection.push(testBook)
    library.addBook(testBook)
    
    expect(library.books[0].publisher.collection[0].title).toEqual(testBook.title)
  })

  it("should accept books that are contained within their publishers collection", () => {
    testBook.publisher.collection.push(testBook)
    library.addBook(testBook)
    
    expect(library.books[0].publisher.collection[0].title).toEqual(testBook.title)
  })

  it("should find and return books from genre search terms", () => {
    testBook.publisher.collection.push(testBook)
    library.addBook(testBook)


    expect(library.findGenre('fantasy')).toEqual([testBook])
  })
});



describe("Author", () => {
    let testAuthor;
    beforeEach(() => {
        testAuthor = new Author("Robin Hobb", "60", "robin@hobb.com");
      });

  it("should have a name, age, and email", () => {

    expect(testAuthor.name).toEqual("Robin Hobb");
  });
});
