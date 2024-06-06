import Library from "../src/library.js"
import Book from "../src/book.js"

describe("Library", () => {
	let library

	beforeEach(() => {
		library = new Library()
	})

	it("should exist", () => {
		expect(library).toBeInstanceOf(Library)
		expect(library.books.length).toBe(0)
	})

	it("should be able to add a book to the library", () => {
		library.addBook(
			"Mort",
			"Terry Pratchett",
			"199-something",
			"Fantacy"
		)

		expect(library.books.length).toBe(1)
		expect(library.books[0].title).toBe("Mort")
		expect(library.books[0].author).toBe("Terry Pratchett")
		expect(library.books[0].pubDate).toBe("199-something")
		expect(library.books[0].genre).toBe("Fantacy")
	})

	it("should throw an error if trying to add book with some property missing", () => {
		expect(() =>
			library.addBook("Mort", "Terry Pratchett", "199-something")
		).toThrowError(
			"Title, Author, Genre, Publication-Date, must be provided for a book to be added"
		)
	})

	it("should be able to find a book in the library", () => {
		library.addBook(
			"Mort",
			"Terry Pratchett",
			"199-something",
			"Fantacy"
		)
		library.addBook(
			"American Gods",
			"Neil Gaiman",
			"Who knows?",
			"Fantacy"
		)

		const foundBook = library.searchBook("Mort")

		expect(foundBook.title).toBe("Mort")
		expect(foundBook.author).toBe("Terry Pratchett")
	})

	it("should throw an error when searching for a book that is not in the library", () => {
		library.addBook(
			"Mort",
			"Terry Pratchett",
			"199-something",
			"Fantacy"
		)
		library.addBook(
			"American Gods",
			"Neil Gaiman",
			"Who knows?",
			"Fantacy"
		)
		expect(() =>
			library
				.searchBook("A book")
				.toThrowError("A book does not exist in the library")
		)
    })
    
	it("should be able to remove a book from the library", () => {
		library.addBook(
			"Mort",
			"Terry Pratchett",
			"199-something",
			"Fantacy"
		)
		library.addBook(
			"American Gods",
			"Neil Gaiman",
			"Who knows?",
			"Fantacy"
		)

		expect(library.books.length).toBe(2)
		expect(library.books[0].title).toBe("Mort")
		expect(library.books[1].author).toBe("Neil Gaiman")

		library.removeBook("Mort")

		expect(library.books.length).toBe(1)
		expect(library.books[0].title).toBe("American Gods")
	})

	it("should throw an error when trying to remove a book that is not in the library", () => {
		library.addBook(
			"Mort",
			"Terry Pratchett",
			"199-something",
			"Fantacy"
		)
		library.addBook(
			"American Gods",
			"Neil Gaiman",
			"Who knows?",
			"Fantacy"
		)
		expect(() =>
			library
				.removeBook("A book")
				.toThrowError("A book does not exist in the library")
		)
	})
})
