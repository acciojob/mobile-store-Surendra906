import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import './../styles/App.css';

const App = () => {
  // Initial list of 8 mobile products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 13",
      price: "70000",
      description: "Apple iPhone 13 with A15 Bionic chip",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: "60000",
      description: "Samsung flagship phone with stunning display",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "OnePlus 9",
      price: "50000",
      description: "Fast and smooth OnePlus smartphone",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Google Pixel 6",
      price: "55000",
      description: "Google's smart phone with advanced camera",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Xiaomi Mi 11",
      price: "40000",
      description: "High performance Xiaomi device",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Realme GT",
      price: "30000",
      description: "Flagship killer by Realme",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 7,
      name: "Vivo X60",
      price: "35000",
      description: "Professional camera phone by Vivo",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 8,
      name: "Oppo Reno 6",
      price: "28000",
      description: "Stylish design and great portrait camera",
      image: "https://via.placeholder.com/150"
    }
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === Number(updatedProduct.id) ? updatedProduct : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== Number(id)));
  };

  return (
    <Router>
      <div>
        {/* Navigation links if needed or handled inside pages */}
        <nav style={{ padding: "10px", background: "#f0f0f0", marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/admin">Admin Panel</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/products/:id" element={<ProductDetails products={products} />} />
          <Route 
            path="/admin" 
            element={
              <AdminPanel 
                products={products} 
                addProduct={addProduct} 
                updateProduct={updateProduct} 
                deleteProduct={deleteProduct} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
