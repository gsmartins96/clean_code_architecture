export default class Product {
    constructor(readonly description: String, readonly price: number, readonly amount: number) {}

    getDescription(): String {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    getAmount(): number {
        return this.amount;
    }
}