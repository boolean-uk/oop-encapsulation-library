import Library from '../src/library.js';

describe("Core Criteria", () => {
  let library
  beforeEach(() => {
    library = new Library();
  });

  it("should exist", () => {
    expect(library).toBeInstanceOf(Library);
  });
})