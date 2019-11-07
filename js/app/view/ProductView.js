class ProductView {

    constructor(container) {
        this._container = container;
    }

    update(productList) {
        this._container.innerHTML = this.template(productList);
    }

    template(productList) {
        return `<div>
                    <h2>Products</h2>
                </div>
                <div>
                    <form id="productForm" onsubmit="productController.save(event)">
                        <label for="idInput">Code</label>
                        <input type="number" name="idInput" placeholder="Item code">

                        <label for="descriptionInput">Description</label>
                        <input type="text" name="descriptionInput" placeholder="Item description">

                        <label for="priceInput">Price</label>
                        <input type="number" name="priceInput" placeholder="Item Price">

                        <label for="quantityInput">Quantity</label>
                        <input type="number" name="quantityInput" placeholder="Quantity">

                        <label for="taxInput">Tax</label>
                        <input type="number" name="taxInput" placeholder="Tax">

                        <button id="btnSave">Save</button>
                    </form>
                </div>

                <div>
                    <hr/>
                    <table id="productTable" class="table table-striped" >
                        <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Tax</th>
                                <th scope="col">Montant</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${
                            productList.products.map(product => `
                                <tr>
                                    <td id="productId" >${product.id}</td>
                                    <td id="productDescription" >${product.description}</td>
                                    <td id="price" >${product.price}</td>
                                    <td id="quantity" >${product.quantity}</td>
                                    <td id="tax" >${product.tax}</td>
                                    <td>${product.total}</td>
                                    <td><img src="/img/edit.svg" width="16px" height="16px" onclick="productController.edit(event)" /></td>
                                    <td><img src="/img/remove.svg" width="16px" height="16px" onclick="productController.remove(event)" /></td>
                                </tr>
                            `).join('')
                        }
                        </tbody>
                        <tfoot>
                        </tfoot>
                    </table>
                </div>`
    }
}