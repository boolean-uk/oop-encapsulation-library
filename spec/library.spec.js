import { Book, Library } from "../src/library.js"

describe("Library", () => {
    let library
    beforeEach(() => {
      library = new Library()  
    })
    it("should exist", () => {
        expect(library).toBeInstanceOf(Library)
    })
    it("should be able to display the books in the library", () => {
        expect(library.listBooks).toEqual([])
    })
    it("should be able to add a book", () => {
        library.addBook("Bad lecture notes", "No one cares", "Education", "5th June 2024")
        expect(library.listBooks).toEqual([{title: "Bad lecture notes", author: "No one cares", genre: "Education", publicationDate: "5th June 2024"}])
    })
    it("should be able to remove a book", () => {
        library.addBook("Bad lecture notes", "No one cares", "Education", "5th June 2024")
        library.removeBook("Bad lecture notes")
        expect(library.listBooks).toEqual([])

    })
})

describe("Book", () => {
    let book
    beforeEach(() => {
        book = new Book("The greatest book ever", "Alistair", "Documentary", "5th June 2024")
    })  
    it("should exist", () => {
        expect(book).toBeInstanceOf(Book)
    })
    it("should throw an error when trying to create a book without correct values", () => {
        let bookTwo
        expect(() => bookTwo = new Book("walking", "john", "horror", 12)).toThrow("Book must have a title, author, genre and publication date as string data types")
    })
    it("should be able to display the book information", () => {
        expect(book.info).toEqual({title: "The greatest book ever", author: "Alistair", genre: "Documentary", publicationDate: "5th June 2024"})
    })
})
