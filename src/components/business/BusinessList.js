import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// import MapOfBus from "../../screens/MapScreen";

function BusinessList(props) {
    return (
        <div>
        {props.business.map(b => 
        <Business key={b.id} 
        name={b.name} 
        adress={b.adress} 
        city={b.city}
        lat={b.latitude}
        long={b.longitute}
        /> )}
        </div>
    );
}
export default BusinessList;

function Business(props) {
    return (
        <div>
        <div className="Wrapper">
            <button onClick={ 'puff'} className="btn_bsn">{props.name}</button>    
            <br/>
            Adress:{props.adress} <br/>
            Stad:{props.city}<br/> 
        
            <MyFancyComponent/>  
        </div>
        <br/>
        </div>
    );
}

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `70%` }} />,
    containerElement: <div style={{ height: `150px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 57.7089, lng: 11.9746 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 57.7089, lng: 11.9746 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)
class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}