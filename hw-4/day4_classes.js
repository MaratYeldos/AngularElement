class Polygon {
    #radius = 0;

    constructor(numbers) {
        this.numbers = numbers;
    }

    get radius() {
        return this.#radius;
    }

    set radius(r) {
        this.#radius = r;
    }

    perimeter() {
        this.numbers.forEach(element => {
            this.#radius += element;
        });
        return this.#radius;
    }
}