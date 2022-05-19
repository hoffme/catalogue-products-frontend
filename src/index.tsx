import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import App from './app';

import './index.css';

const body = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(body);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
