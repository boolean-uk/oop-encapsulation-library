export default class Author {
    #name;
    #age;
    #email;

    constructor(name, age, email) {
        this.#name = name;
        this.#age = age;
        this.#email = email;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get email() {
        return this.#email;
    }
}
