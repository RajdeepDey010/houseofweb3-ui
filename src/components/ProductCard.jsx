import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      className="product-card"
      onClick={handleCardClick}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, x: [0, 100, 0] }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)" }}
      whileTap={{ scale: 0.95 }}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />
      <h2 style={{ fontSize: "18px", margin: "16px 0" }}>{product.title}</h2>
      <p style={{ fontSize: "16px", fontWeight: "bold" }}>${product.price}</p>
    </motion.div>
  );
};

export default ProductCard;