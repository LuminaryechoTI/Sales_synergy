import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Global styles can go here

// Render the app inside the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);