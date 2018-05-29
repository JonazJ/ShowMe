import React, { Component } from 'react';
import GetBusiness from '../api/GetBusiness';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// screens
import Home from '../screens/HomeScreen';

  const Businesses = () => (
    <div>
      <div>
        <h2>Alla Företag!</h2>
        
        <br/>
      </div>
        <ul>
           
        <div><GetBusiness/></div> 
        </ul>
    </div>
  );

  
  
  export default Businesses;