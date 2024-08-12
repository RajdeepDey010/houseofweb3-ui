import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products }) => {
    return (
        <div className="mx-8 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
