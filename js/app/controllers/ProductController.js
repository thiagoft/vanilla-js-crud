class ProductController {

    constructor() {
       //setting querySelector function to $
       let $ = document.querySelector.bind(document);
       let container = $("#container");

       this._productView = new ProductView(container);
       this._productList = new ProductList();
       this._productView.update(this._productList);
       
    }

    save(event) {
        event.preventDefault();
        let editedProduct = this._createProduct();
        let productOld = this._productList.findById(editedProduct.id);

        if (productOld != null) {
            let index = this._findProductById(productOld.id);
            this._productList.products = ArrayUtils.removeIndex(this._productList.products,index);
        }

        this._productList.add(editedProduct);
        this._productView.update(this._productList);
    }

    _findProductById(productId) {
        let indexToRemove;
        this._productList.products.forEach((element, index) => {
            if (element.id === productId) {
                indexToRemove = index;
            }
        });

        return indexToRemove;
    }

    edit(event) {
        console.log(event);
        let form = document.querySelector("#productForm");
        let row = event.target.parentNode.parentNode;

        form.idInput.value = row.querySelector("#productId").textContent;
        form.descriptionInput.value = row.querySelector("#productDescription").textContent;
        form.priceInput.value = row.querySelector("#price").textContent;
        form.quantityInput.value = row.querySelector("#quantity").textContent;
        form.taxInput.value = row.querySelector("#tax").textContent;
    }

    remove(event) {
        let row = event.target.parentNode.parentNode;
        let productId = row.querySelector("#productId").textContent;
        let indexToRemove;

        this._productList.products.forEach((element, index) => {
            if (element.id === productId) {
                indexToRemove = index;
            }
        });

        event.target.parentNode.parentNode.remove();
        this._productList.products = ArrayUtils.removeIndex(this._productList.products, indexToRemove);
    }

    _createProduct() {
        let form = document.querySelector("#productForm");
        let product = new Product(form.idInput.value,
        form.descriptionInput.value,
        form.priceInput.value,
        form.quantityInput.value,
        form.taxInput.value);

        form.reset();

        return product;
    }
}