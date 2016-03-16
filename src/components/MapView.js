import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class MapView extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {lat, lng} = this.props;
        return (
            <div id="map" style={{height: '450px'}}>
                <GoogleMapLoader
                    containerElement={<div style={{height: '100%'}}></div>}
                    googleMapElement={
                        <GoogleMap defaultZoom={12} defaultCenter={{lng: 7.625, lat: 51.962}}>
                            <Marker position={{lng, lat}}/>
                        </GoogleMap>
                        }
                />
            </div>
        );
    }
}

export default MapView;