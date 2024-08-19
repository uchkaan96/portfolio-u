import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional: for measuring performance

// Render the App component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Start measuring performance in your app, pass function to log results
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
