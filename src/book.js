class Book {
	#title
	#author
	#pubDate
	genre

	constructor(title, author, pubDate, genre) {
		this.#title = title
		this.#author = author
		this.#pubDate = pubDate
		this.genre = genre
    }
    
    get title() {
        return this.#title
    }

    get author() {
        return this.#author
    }

    get pubDate() {
        return this.#pubDate
    }

}

export default Book
