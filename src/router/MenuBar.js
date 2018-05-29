import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// screens
import Home from '../screens/HomeScreen';
import ProductView from '../screens/ProductScreen';
import Businesses from '../screens/BusinessScreen';
import MyPictures from '../screens/PictureScreen';
//styles
import '../styles/Navbars.css';

 const MenuRow = () => (
  <Router>
      <div className="navbar">
        <ul>
        <Link style={{padding: "1em"}} to="/" className="navbar_btn_">Home</Link>
        <Link style={{padding: "1em"}} to="/products" className="navbar_btn_">Produkt Roulette</Link>
        <Link style={{padding: "1em"}} to="/business" className="navbar_btn_">Företag!</Link>
        <Link style={{padding: "1em"}} to="/pictures" className="navbar_btn_">Motivate me!</Link>
        </ul>
      <br/><br/>    

      <Route exact path="/" component={Home} />
      <Route path="/products" component={ProductView} />
      <Route path="/business" component={Businesses} />
      <Route path="/pictures" component={MyPictures} />
      </div>
  </Router>
); 


  export default MenuRow;