import React from 'react'
import GoogleMap from 'google-map-react'
import {db} from '../index.js'

import getLatLng from '../logic/Geocoding.js'

const mapAPIKey = "API_KEY" // TODO MOVE THIS TO SECRETS FILE
const ithacaLatLng = {lat: 42.4534, lng: -76.4735}
const mapZoom = 15

const MarkerComponent = ({}) => <img src="houseicon.png" width="30" height="30"/>

class MapView extends React.Component {
  fetchPlaces = () => {
    db.collection("places").get()
      .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var loc = getLatLng(doc.get("address"));
        <MarkerComponent lat={loc.lat} lng={loc.lng} />
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    })
  }
  render() {
    return (
        <div className="App" style={{width: 500}, {height: 500}}>
            <h1> Abode </h1>
            <GoogleMap bootstrapURLKeys={{ key: mapAPIKey }} defaultCenter={ithacaLatLng} defaultZoom={mapZoom}>
              {this.fetchPlaces()}
            </GoogleMap>
        </div>
    );
  }
}

export default MapView;