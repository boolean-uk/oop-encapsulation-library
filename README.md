# OOP - Encapsulation

1. Fork and clone this repository
2. `npm ci` to install dependencies
3. `npx jasmine` to run any tests you create

## Core Criteria

Create a library application where users can manage a collection of books. Use encapsulation to put related data and behaviour into individual classes.

- The library should be able to add, remove and list books
- Books should have a title, author, genre and publication date
- Use access modifiers (`#`) and `get`, `set` functions to prevent the unnecessary changing of data outside of classes
- The title, author and publication date of a book should be immutable, they should never be able to change in value once set
- Create unit tests to verify your functionality. You don't need to practice TDD for this, you can create the tests after writing the source code
  - You must have at least one test for every function you create

## Extensions

1. Authors should have a name, age and email address
2. Books should have a publisher, which has a name and website
3. Books cannot be added to the library without details of the author and publisher
4. Books cannot be added to the library if a publisher doesn't list that book as part of their published collection
5. Users can search the library for books by specific genres, publishers and authors
