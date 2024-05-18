import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './root-cmp';
import './assets/scss/styles.scss'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);