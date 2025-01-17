// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.js


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sales from './components/Sales';
import QuickSale from './components/QuickSale';
import About from './components/About';
import CustomerManagement from './components/CustomerManagement';
import InventoryManagement from './components/InventoryManagement';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />,
          <Route path="/sales" element={<Sales />} />,
          <Route path="/quick-sale" element={<QuickSale />} />,
          <Route path="/about" element={<About />} />,
          <Route path="/customer-management" element={<CustomerManagement />} />,
          <Route path="/inventory-management" element={<InventoryManagement />} />,
        </Routes>
      </div>
    </Router>
  );
}

export default App;

