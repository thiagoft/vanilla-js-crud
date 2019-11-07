class ProductList {
    constructor() {
        this._products = [];
    }

    add(product) {
        this._products.push(product);
    }

    get products() {
        //Hack to makes _products imutable;
        // return [].concat(this._products);
        return this._products;
    }

    set products(products) {
        this._products = products;
    }

    findById(id) {
        let productToReturn;

        this._products.forEach(product => {
            if (product.id === id) {
                productToReturn = product;
            }
        });

        return productToReturn;
    }
}