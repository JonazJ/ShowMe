import React, { Component } from 'react';
import GetAllProducts from '../api/GetProducts';
// style
import '../styles/App.css';

const ProductView = () => (
  <div>
    <h2 ClassName="title_prod">Alla Produkter!</h2>
    <p>
      { <GetAllProducts/> }
    </p>
  </div>
);

export default ProductView;