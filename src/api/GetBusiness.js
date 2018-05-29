import React, { Component } from 'react';
import BusinessList from '../components/business/BusinessList';

class GetBusiness extends Component {
    // default State object
    state = {
      businesses: []
    }
    componentDidMount() {
      fetch("http://finditappapi.azurewebsites.net/Business/GetAll")
      .then(function(businesses) {
         //create an array of products only with relevant data
        return businesses.json()
      }).then((businessList)=>{
        console.log(businessList)
        const tempBusinessList = businessList.map(business => {
          return {
              id: business.id,
              name: business.name,
              adress: business.adress,
              city: business.city,
              latitude: business.latitude,
              longitude: business.longitude,
              verified: business.verified
          };
        });
        // create a new "State" object without mutating the original State object.
        const newState = Object.assign({}, this.state, {
          businesses: tempBusinessList
         })
        // store the new state object in the component's state
        this.setState(newState);
      }).catch(error => console.log(error));
    }
    render() {
      return (
        <div>
            <div>
                <BusinessList business={this.state.businesses} />
            </div>
        </div>
      );
    }
  } 
  export default GetBusiness;