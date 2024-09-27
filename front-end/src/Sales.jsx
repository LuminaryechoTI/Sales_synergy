import  { useState } from 'react';
import axios from 'axios';

function Sales() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [products, setProducts] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Fetch products based on search
    axios.get(`/api/products?search=${searchQuery}`)
      .then(response => {
        setProducts(response.data);
      });
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    axios.post('/api/checkout', { cart, paymentMethod })
      .then(response => {
        console.log('Checkout successful', response.data);
        setCart([]);  // Clear cart after checkout
      })
      .catch(error => {
        console.error('Checkout error', error);
      });
  };

  return (
    <div>
      <h1>Sales</h1>

      {/* Product Search */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for products..."
      />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {/* Cart */}
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>

      {/* Payment Options */}
      <h2>Payment</h2>
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="cash">Cash</option>
        <option value="credit">Credit Card</option>
        <option value="gift-card">Gift Card</option>
      </select>

      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Sales;
