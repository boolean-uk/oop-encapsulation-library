import Library from "../src/library.js"

describe("Library", () => {
  let library

  beforeEach(() => {
    library = new Library()
  })

  it("should be able to add a book to the collection", () => {
    library.addBook(
      "A Game of Thrones",
      "George R. R. Martin",
      75,
      "georgemartin@gmail.com",
      "Fantasy",
      "August 1, 1996",
      "Simon & Schuster",
      "https://www.simonandschuster.com/"
    )

    expect(library.listCollection()).toEqual([
      {
        title: "A Game of Thrones",
        author: {
          name: "George R. R. Martin",
          age: 75,
          email: "georgemartin@gmail.com",
        },
        genre: "Fantasy",
        release: "August 1, 1996",
        publisher: {
          name: "Simon & Schuster",
          website: "https://www.simonandschuster.com/",
        },
      },
    ])
  })

  it("should be able to remove an book from the collection", () => {
    library.addBook(
      "A Game of Thrones",
      "George R. R. Martin",
      75,
      "georgemartin@gmail.com",
      "Fantasy",
      "August 1, 1996",
      "Simon & Schuster",
      "https://www.simonandschuster.com/"
    )
    library.addBook(
      "Harry Potter and the Philosopher's Stone",
      "J. K. Rowling",
      58,
      "jkrowling@gmail.com",
      "Fantasy",
      "June 26, 1997",
      "Bloomsbury",
      "https://www.bloomsbury.com/uk/"
    )

    library.removeBook("A Game of Thrones")

    expect(library.listCollection()).toEqual([
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: {
          name: "J. K. Rowling",
          age: 58,
          email: "jkrowling@gmail.com",
        },
        genre: "Fantasy",
        release: "June 26, 1997",
        publisher: {
          name: "Bloomsbury",
          website: "https://www.bloomsbury.com/uk/",
        },
      },
    ])
  })

  it("should be able to list the collection", () => {
    library.addBook(
      "A Game of Thrones",
      "George R. R. Martin",
      75,
      "georgemartin@gmail.com",
      "Fantasy",
      "August 1, 1996",
      "Simon & Schuster",
      "https://www.simonandschuster.com/"
    )
    library.addBook(
      "Harry Potter and the Philosopher's Stone",
      "J. K. Rowling",
      58,
      "jkrowling@gmail.com",
      "Fantasy",
      "June 26, 1997",
      "Bloomsbury",
      "https://www.bloomsbury.com/uk/"
    )

    expect(library.listCollection()).toEqual([
      {
        title: "A Game of Thrones",
        author: {
          name: "George R. R. Martin",
          age: 75,
          email: "georgemartin@gmail.com",
        },
        genre: "Fantasy",
        release: "August 1, 1996",
        publisher: {
          name: "Simon & Schuster",
          website: "https://www.simonandschuster.com/",
        },
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: {
          name: "J. K. Rowling",
          age: 58,
          email: "jkrowling@gmail.com",
        },
        genre: "Fantasy",
        release: "June 26, 1997",
        publisher: {
          name: "Bloomsbury",
          website: "https://www.bloomsbury.com/uk/",
        },
      },
    ])
  })

  it("should be only able to modify book's genre", () => {
    library.addBook(
      "A Game of Thrones",
      "George R. R. Martin",
      75,
      "georgemartin@gmail.com",
      "Drama",
      "August 1, 1996",
      "Simon & Schuster",
      "https://www.simonandschuster.com/"
    )

    expect(() => (library.collection[0].title = "The Hobbit")).toThrowError()

    library.collection[0].genre = "Fantasy"

    expect(library.listCollection()).toEqual([
      {
        title: "A Game of Thrones",
        author: {
          name: "George R. R. Martin",
          age: 75,
          email: "georgemartin@gmail.com",
        },
        genre: "Fantasy",
        release: "August 1, 1996",
        publisher: {
          name: "Simon & Schuster",
          website: "https://www.simonandschuster.com/",
        },
      },
    ])
  })

  it("should throw an error if the book's title, author, genre or release not provided correctly", () => {
    expect(() =>
      library.addBook(
        "A Game of Thrones",
        "George R. R. Martin",
        75,
        "georgemartin@gmail.com",
        "Fantasy",
        1996,
        "Simon & Schuster",
        "https://www.simonandschuster.com/"
      )
    ).toThrowError("Book's properties should be provided correctly")
  })

  it("should throw an error if trying to remove an unfound book", () => {
    expect(() => library.removeBook("A Game of Thrones")).toThrowError(
      "Book not found"
    )
  })

  it("should search the book's collection by genre, publisher or author", () => {
    library.addBook(
      "A Game of Thrones",
      "George R. R. Martin",
      75,
      "georgemartin@gmail.com",
      "Fantasy",
      "August 1, 1996",
      "Simon & Schuster",
      "https://www.simonandschuster.com/"
    )
    library.addBook(
      "Harry Potter and the Philosopher's Stone",
      "J. K. Rowling",
      58,
      "jkrowling@gmail.com",
      "Fantasy",
      "June 26, 1997",
      "Bloomsbury",
      "https://www.bloomsbury.com/uk/"
    )

    expect(library.searchCollection("George R. R. Martin")).toEqual([
      {
        title: "A Game of Thrones",
        author: {
          name: "George R. R. Martin",
          age: 75,
          email: "georgemartin@gmail.com",
        },
        genre: "Fantasy",
        release: "August 1, 1996",
        publisher: {
          name: "Simon & Schuster",
          website: "https://www.simonandschuster.com/",
        },
      },
    ])
  })
})
