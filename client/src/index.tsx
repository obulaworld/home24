import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import ProductList from './views/ProductsView/ProductsView';

ReactDOM.render(
  <React.StrictMode>
    <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
)
