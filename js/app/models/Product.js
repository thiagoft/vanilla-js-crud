class Product {

    constructor(id, description, price, quantity,tax) {
        this._id = id;
        this._description = description;
        this._price = price;
        this._quantity = quantity;
        this._tax = tax;
        this._total = this.calculateTotal();
    }

    get id() {
        return this._id;
    }

    get description() {
        return this._description;
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this._quantity;
    }

    get tax() {
        return this._tax;
    }

    get total() {
        return this._total;
    }

    calculateTotal() {
        return (this._price*this._quantity)*((this._tax/100)+1);
    }
}