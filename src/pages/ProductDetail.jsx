import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <img
        className="max-w-[300px] mb-5 mx-auto"
        src={product.image}
        alt={product.title}
      />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)</p>
    </div>
  );
};

export default ProductDetail;
