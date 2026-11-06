import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Mobile Store Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{ border: "1px solid #ccc", padding: "15px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <Link to={`/products/${product.id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
