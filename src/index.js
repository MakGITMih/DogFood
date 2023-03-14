import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App.jsx';
import { StrictMode } from 'react';
import { ProductPages } from './ProductPages/ProductPages';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
    <BrowserRouter>
    <App />
    </BrowserRouter>
  
  
);



