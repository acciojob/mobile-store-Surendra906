import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, addProduct, updateProduct, deleteProduct }) => {
  const [form, setForm] = useState({ name: "", price: "", description: "", image: "" });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateProduct({ ...form, id: editingId });
      setEditingId(null);
    } else {
      addProduct(form);
    }
    setForm({ name: "", price: "", description: "", image: "" });
  };

  const handleEditClick = (product) => {
    setEditingId(product.id);
    setForm(product);
  };

  return (
    <div className="admin-panel" style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>
      
      {/* Form to Add / Edit Product */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px", background: "#f9f9f9", padding: "15px" }}>
        <h3>{editingId ? "Edit Product" : "Add New Product"}</h3>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input 
            type="text" 
            className="form-control" 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required 
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Price: </label>
          <input 
            type="number" 
            className="form-control" 
            value={form.price} 
            onChange={(e) => setForm({ ...form, price: e.target.value })} 
            required 
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Description: </label>
          <input 
            type="text" 
            className="form-control" 
            value={form.description} 
            onChange={(e) => setForm({ ...form, description: e.target.value })} 
            required 
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Image URL: </label>
          <input 
            type="text" 
            className="form-control" 
            value={form.image} 
            onChange={(e) => setForm({ ...form, image: e.target.value })} 
            required 
          />
        </div>
        <button type="submit">{editingId ? "Update Product" : "Add"}</button>
      </form>

      {/* Product List for Administration */}
      <h3>Existing Products ({products.length})</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", alignItems: "center" }}>
            <span>{product.name} - ₹{product.price}</span>
            <div>
              <button onClick={() => handleEditClick(product)} style={{ marginRight: "10px" }}>Edit</button>
              <button className="float-right" onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export Dialog = AdminPanel; // Or standard export default
export default AdminPanel;
