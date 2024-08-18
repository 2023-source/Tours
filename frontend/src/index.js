import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css';
import { AuthContextProvider } from './context/AuthContext';
// import { Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
  </React.StrictMode>
);
reportWebVitals();
