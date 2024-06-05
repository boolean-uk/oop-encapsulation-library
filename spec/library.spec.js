import Library, {Book} from "../src/library.js"

describe('library', () => {
    let library

    beforeEach(() => {library = new Library()})

    it('should be an instance of the class', () => {
        expect(library).toBeInstanceOf(Library)
    })
    
    it('should initialise an empty array', () => {
        expect(library.books.length).toBe(0)
    })
    
    it('should add a book to the array of books', () => {
        const newBook = {
            author:"Tom T. Thompson",
            title:"Tom Takes Tomorrow",
            publicationDate:"24/06/2002",
            genre:"Action Adventure"
        }

        library.addBook(newBook)

        console.log(library.books)

        
        
        expect(library.books[0]).toBeInstanceOf(Book)
        expect(library.books[0].title).toBe("Tom Takes Tomorrow")
    })
})