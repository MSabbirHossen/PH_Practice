import React, { useState } from 'react';
import ProductForm from './ProductForm';
import FormTable from './FormTable';

const ProductManege = () => {

    const [products, setProducts] =useState();
    const handleAddProducts = newProduct =>{
        const newProducts = [...products, newProduct];
        setProducts(newProducts)
    }
    return (
        <div>
            <ProductForm handleAddProducts={handleAddProducts}></ProductForm>
        <FormTable products={products}></FormTable>
        </div>
    );
};

export default ProductManege;