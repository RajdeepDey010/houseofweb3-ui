import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      )}
    </Router>
  );
}

export default ProductList;