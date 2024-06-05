class Book {
	#title;
	#author;
	#date;

	constructor(title, author, genre, date) {
		this.#title = title;
		this.#author = author;
		this.genre = genre;
		this.#date = date;
	}

	get title() {
		return this.#title;
	}
	get author() {
		return this.#author;
	}
	get date() {
		return this.#date;
	}
}

class Library {
	#books;

	constructor(...books) {
		this.#books = [];
		books.forEach((book) => this.add(book));
	}

	add(book) {
		if (!(book instanceof Book)) {
			throw new Error("Invalid book");
		}

		this.#books.push(book);
	}

	delete(book) {
		const index = this.#books.findIndex((e) => e.title === book.title);

		this.#books.splice(index, 1);
	}

	get({ index, author, date, title, genre }) {
		if (index) {
			return this.#books[index];
		} else
			return this.#books.find(
				(e) =>
					e.author === author ||
					e.date === date ||
					e.title === title ||
					e.genre === genre
			);
	}

	get booksCount() {
		return this.#books.length;
	}
}

module.exports = { Book, Library };
