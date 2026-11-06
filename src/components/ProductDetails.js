import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link to="/" className="btn">Back</Link>
      </div>
    );
  }

  return (
    <div className="product-details" style={{ padding: "20px" }}>
      <Link to="/" className="btn" style={{ marginBottom: "20px", display: "inline-block" }}>Back</Link>
      <div>
        <img src={product.image} alt={product.name} style={{ width: "300px", height: "300px", objectFit: "cover" }} />
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
