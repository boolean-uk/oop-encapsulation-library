import Library from "../src/library.js";

describe('Library', () => {
    let library

    beforeEach(() => {
        library = new Library()
    })

    it('should be able to add a book to the collection', () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 75, 'georgemartin@gmail.com', 'Fantasy', 'August 1, 1996')

        expect(library.listCollection()).toEqual([
            {
                title: 'A Game of Thrones',
                author: {
                    name: 'George R. R. Martin',
                    age: 75,
                    email: 'georgemartin@gmail.com'
                },
                genre: 'Fantasy',
                release: 'August 1, 1996'
            }
        ])
    })

    it('should be able to remove an book from the collection', () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 75, 'georgemartin@gmail.com', 'Fantasy', 'August 1, 1996')
        library.addBook("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 58, 'jkrowling@gmail.com', 'Fantasy', 'June 26, 1997')

        library.removeBook('A Game of Thrones')

        expect(library.listCollection()).toEqual([
            {
                title: "Harry Potter and the Philosopher's Stone",
                author: {
                    name: 'J. K. Rowling',
                    age: 58,
                    email: 'jkrowling@gmail.com'
                },
                genre: 'Fantasy',
                release: 'June 26, 1997'
            }
        ])
    })

    it('should be able to list the collection', () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 75, 'georgemartin@gmail.com', 'Fantasy', 'August 1, 1996')
        library.addBook("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 58, 'jkrowling@gmail.com', 'Fantasy', 'June 26, 1997')

        expect(library.listCollection()).toEqual([
            {
                title: 'A Game of Thrones',
                author: {
                    name: 'George R. R. Martin',
                    age: 75,
                    email: 'georgemartin@gmail.com'
                },
                genre: 'Fantasy',
                release: 'August 1, 1996'
            },
            {
                title: "Harry Potter and the Philosopher's Stone",
                author: {
                    name: 'J. K. Rowling',
                    age: 58,
                    email: 'jkrowling@gmail.com'
                },
                genre: 'Fantasy',
                release: 'June 26, 1997'
            }
        ])
    })

    it("should be only able to modify book's genre", () => {
        library.addBook('A Game of Thrones', 'George R. R. Martin', 75, 'georgemartin@gmail.com', 'Drama', 'August 1, 1996')

        expect(() => library.collection[0].title = 'The Hobbit').toThrowError()
        expect(() => library.collection[0].author.name = 'J. R. R. Tolkien').toThrowError()
        expect(() => library.collection[0].author.age = 62).toThrowError()
        expect(() => library.collection[0].author.email = 'jkrowling@gmail.com').toThrowError()
        expect(() => library.collection[0].release = 'September 21, 1937').toThrowError()

        library.collection[0].genre = 'Fantasy'

        expect(library.listCollection()).toEqual([
            {
                title: 'A Game of Thrones',
                author: {
                    name: 'George R. R. Martin',
                    age: 75,
                    email: 'georgemartin@gmail.com'
                },
                genre: 'Fantasy',
                release: 'August 1, 1996'
            }
        ])
    })

    it("should throw an error if the book's title, author, genre or release not provided correctly", () => {
        expect(() => library.addBook('A Game of Thrones', 'George R. R. Martin', 75, 'georgemartin@gmail.com', 'Fantasy', 1996)).toThrowError("Book's properties should be provided correctly")
    }) 

    it('should throw an error if trying to remove an unfound book', () => {
        expect(() => library.removeBook('A Game of Thrones')).toThrowError('Book not found')
    })
})