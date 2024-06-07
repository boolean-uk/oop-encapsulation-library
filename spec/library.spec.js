import Library, { Book } from '../src/library.js';

describe("Core Criteria", () => {
  let library
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
})