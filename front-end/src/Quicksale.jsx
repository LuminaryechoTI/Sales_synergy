import  { useState } from 'react';

function QuickSale() {
  const popularItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Quick Sale</h1>
      <div>
        {popularItems.map((item) => (
          <button key={item.id} onClick={() => addToCart(item)}>
            {item.name} - ${item.price}
          </button>
        ))}
      </div>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>

      <button>Complete Purchase</button>
    </div>
  );
}

export default QuickSale;
