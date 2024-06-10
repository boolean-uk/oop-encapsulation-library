import Library, { Book, Author, Publisher } from "../src/library.js";

describe("Core Criteria", () => {
  let library;
  beforeEach(() => {
    library = new Library();
  });

  it("should exist", () => {
    expect(library).toBeInstanceOf(Library);
  });

  it("should be able to add books", () => {
    let book = new Book();
    expect(library.list().length).toBe(0);
    library.addBook(book);
    expect(library.list().length).toBe(1);
  });

  it("should be able to remove books", () => {
    expect(library.list().length).toBe(0);
    let publisher = new Publisher("Harper Collins Books", "harpercollins.com");
    let author = new Author("J.K Rowling", 56, "jkrowling@gmail.com");
    let book1 = new Book(
      "Harry Porter & The Prisoner of Azkaban",
      author,
      "fantasy",
      "1999-01-01",
      publisher
    );
    let book1_id = library.addBook(book1);
    let book2 = new Book(
      "Harry Porter & The Halfblood Prince",
      author,
      "fantasy",
      "1999-01-01",
      publisher
    );
    let book2_id = library.addBook(book2);

    let book3 = new Book(
      "Harry Porter & The Order of the Pheonix",
      author,
      "fantasy",
      "1999-01-01",
      publisher
    );
    let book3_id = library.addBook(book3);
    expect(library.list().length).toBe(3);
    library.removeBook(book2_id);
    expect(library.list().length).toBe(2);
  });

  it("should have a title, author, genre and publication date", () => {
    let author = new Author("John Grisham", 63, "john@fountainpublishers.com");
    expect(author).toBeInstanceOf(Author);

    let book = new Book("The Firm", author, "thriller", "2002-08-01", null);
    expect(book.title).not.toBeNull();
    expect(book.title).toBeDefined();
    expect(book.author).not.toBeNull();
    expect(book.author).toBeDefined();
    expect(book.genre).not.toBeNull();
    expect(book.genre).toBeDefined();
    expect(book.publicationDate).not.toBeNull();
    expect(book.publicationDate).toBeDefined();
  });
});

describe("Extended Criteria", () => {
  it("Authors should have a name, age and email address", () => {
    let author = new Author("John Grisham", 63, "john@fountainpublishers.com");
    expect(author).toBeInstanceOf(Author);
    expect(author.name).toBeDefined();
    expect(author.age).toBeDefined();
    expect(author.email).toBeDefined();
  });

  it("Books should have a publisher, which has a name and website", () => {
    let publisher = new Publisher("Google", "www.google.com");
    expect(publisher).toBeInstanceOf(Publisher);
    expect(publisher.name).toBeDefined();
    expect(publisher.websiteURL).toBeDefined();
  });
});
