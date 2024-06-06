import Book from "./book.js"

class Library {
	#books

	constructor() {
		this.#books = []
	}

	get books() {
		return this.#books
	}

	addBook(title, author, pubDate, genre) {
		const book = new Book(title, author, pubDate, genre)

		if (!book.title || !book.author || !book.pubDate || !book.genre) {
			throw new Error(
				"Title, Author, Genre, Publication-Date, must be provided for a book to be added"
			)
		} else {
			this.#books.push(book)
		}
	}

	searchBook(title) {
		const bookToFind = this.#books.findIndex(
			(sTerm) => sTerm.title === title
		)
		if (bookToFind !== -1) {
			return this.#books[bookToFind]
		} else {
			throw new Error(`${title} does not exist in the library`)
		}
	}

	removeBook(title) {
		const bookToRemove = this.searchBook(title)
		if (bookToRemove !== -1) {
			this.#books.splice(bookToRemove, 1)

		} else {
			throw new Error(`${title} does not exist in the library`)
		}
	}
}


export default Library
