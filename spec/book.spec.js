import Book from "../src/book.js";

describe("Book", function () {
  let book;

  beforeEach(function () {
    book = new Book(
      "Diary of a wimpy kid",
      "Jeff Kinney",
      "Comedy",
      "01/03/2007"
    );
  });

  it("should return the title", function () {
    expect(book.title).toBe("Diary of a wimpy kid");
  });

  it("should return the author", function () {
    expect(book.author).toBe("Jeff Kinney");
  });

  it("should return the genre", function () {
    expect(book.genre).toBe("Comedy");
  });

  it("should allow genre to be changed", function () {
    book.genre = "Science Fiction";
    expect(book.genre).toBe("Science Fiction");
  });

  it("should return the publication date", function () {
    expect(book.publicationDate).toBe("01/03/2007");
  });

  it("should not allow title to be changed directly", function () {
    expect(book.title).toBe("Diary of a wimpy kid");
  });

  it("should not allow author to be changed directly", function () {
    expect(book.author).toBe("Jeff Kinney");
  });

  it("should not allow publication date to be changed directly", function () {
    expect(book.publicationDate).toBe("01/03/2007");
  });
});
