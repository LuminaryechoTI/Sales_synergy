import { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryManagement() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      });
  }, []);

  const handleAddProduct = () => {
    axios.post('/api/products', newProduct)
      .then(response => {
        setProducts([...products, response.data]);
        setNewProduct({ name: '', price: '', stock: '' });
      });
  };

  return (
    <div>
      <h1>Inventory Management</h1>

      {/* Product Listing */}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price} - {product.stock} in stock
          </li>
        ))}
      </ul>

      {/* Add New Product */}
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Stock"
        value={newProduct.stock}
        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default InventoryManagement;
