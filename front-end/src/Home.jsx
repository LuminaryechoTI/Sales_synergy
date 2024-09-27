import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

function Home() {
  const [salesSummary, setSalesSummary] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [lowStockAlerts, setLowStockAlerts] = useState([]);

  useEffect(() => {
    // Fetch sales summary
    axios.get('/api/sales-summary')
      .then(response => {
        setSalesSummary(response.data);
      });

    // Fetch top-selling products
    axios.get('/api/top-products')
      .then(response => {
        setTopProducts(response.data);
      });

    // Fetch low stock alerts
    axios.get('/api/low-stock-alerts')
      .then(response => {
        setLowStockAlerts(response.data);
      });
  }, []);

  const salesData = {
    labels: ['Day 1', 'Day 2', 'Day 3'], // Placeholder data
    datasets: [
      {
        label: 'Daily Sales',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: salesSummary,
      }
    ]
  };

  return (
    <div>
      <h1>Dashboard Overview</h1>

      {/* Sales Summary */}
      <h2>Sales Summary</h2>
      <Bar data={salesData} />

      {/* Top-selling Products */}
      <h2>Top-selling Products</h2>
      <ul>
        {topProducts.map((product, index) => (
          <li key={index}>{product.name} - {product.sales} units</li>
        ))}
      </ul>

      {/* Low Stock Alerts */}
      <h2>Low Stock Alerts</h2>
      <ul>
        {lowStockAlerts.map((alert, index) => (
          <li key={index}>{alert.product_name} - Only {alert.stock} left!</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
