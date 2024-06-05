const { Book, Library } = require("../src/library");
// import { Book, Library } from "../src/library";
describe("Library", () => {
	let library;

	beforeAll(() => {
		library = new Library(
			new Book("The Lord of the Rings", "Tolkien", "Fantasy", 1954),
			new Book("The Hobbit", "Tolkien", "Fantasy", 1937),
			new Book("The Lord of the Rings", "Tolkien", "Fantasy", 1954)
		);
	});

	it("should add a book to the library", () => {
		const book = new Book("Eragon", "idk", "Fantasy", 1998);
		library.add(book);
		expect(library.get({ title: "Eragon" })).toEqual(book);
	});

	it("should remove a book from the library", () => {
		library.delete({ title: "The Hobbit" });

		expect(library.get({ title: "The Hobbit" })).toBeUndefined();
	});
});
