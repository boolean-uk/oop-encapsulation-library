import Library from '../src/library.js'

describe ('Library', ()=> {
    let library;

    beforeEach(()=> {
        library = new Library()
    })

    it('should be a class that can be instantiated', () => {
        expect(library).toBeInstanceOf(Library)
    })
})