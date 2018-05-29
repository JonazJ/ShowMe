import React, { Component } from 'react';
import '../styles/App.css';

class GetAllProducts extends Component {
  // default State object
  state = {
    products: []
  }
  GetProducts () {
    console.log("GPCheck")
    fetch("http://finditappapi.azurewebsites.net/Product/GetAllProducts")
    .then(function(products) {
       //Skapar en array med önskad data av objekt
      return products.json()
    }).then((productList)=>{
      const tempProductList = productList.map(product => {
        return {
          id: product.id,
          name: product.name,
          type: product.type,
          category: product.category,
          group: product.group
        };
      });
      // Skapa ett nytt "State" objekt utan att ändra orginal objektet av "State". 
      this.setState({
        products: tempProductList
      }, ()=>{console.log(this.state.products)});
    }).catch(error => console.log(error));
  }
  componentDidMount() {
    this.GetProducts()
  }
  render(){
    var list = this.state.products.map((product)=>{
      if (product.type !== "Kolsyrat")
      return (
        <tr>
          <th>{product.name}</th>
          <th>{product.category}</th>
          <th>{product.type}</th>
        </tr>
      )
      else
      return (
        <tr>
            <th>{product.name}</th>
            <th>{product.category}</th>
        </tr>
      )
    })
    var sorted = this.state.products.map((products)=>{
        
    })
    return (
      <div style={{display: "flex", alignContent: "center", justifyContent: "center"}}>
        <table style={{textAlign: "left"}}>
          <tr style={{marginBottom: "1em"}}>
            <th>Namn</th>
            <th>Typ av dryck</th>
            <th></th>
          </tr>
          {list}
        </table>
      </div>
    )
  }
}
export default GetAllProducts;