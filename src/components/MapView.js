import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class MapView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="map" style={{height: '450px'}}>
                <GoogleMapLoader
                    containerElement={<div style={{height: '100%'}}></div>}
                    googleMapElement={<GoogleMap defaultZoom={3} defaultCenter={{lat: -25.363882, lng: 131.044922}} />}
                />
            </div>
        );
    }
}

export default MapView;