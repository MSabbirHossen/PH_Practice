import React from 'react';

const ProductForm = ({handleAddProducts}) => {

    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        console.log("🚀 ~ handleProductSubmit ~ name:", name)
        const price = e.target.price.value;
        console.log("🚀 ~ handleProductSubmit ~ price:", price)
        const quantity = e.target.quantity.value;
        console.log("🚀 ~ handleProductSubmit ~ quantity:", quantity)

        const newProduct = {
            name,
            price,
            quantity
        }
        console.log("🚀 ~ handleProductSubmit ~ newProduct:", newProduct)
        handleAddProducts(newProduct);
    }

    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name'/> <br />
                <input type="text" name='price' placeholder='Product Price'/> <br />
                <input type="text" name='quantity' placeholder='Product Quantity'/> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;