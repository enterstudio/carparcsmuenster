import React from 'react';
import moment from 'moment';
import CarsParcsStore from '../stores/CarParcsStore';
import LocationStore from '../stores/LocationStore';
import * as Actions from '../actions/CarParcsActions';

import MapView from '../components/MapView';

class Details extends React.Component {
    constructor() {
        super();

        this.state = {
            parc: {},
            location: null
        };
        Actions.getCarParcs();
        Actions.getLocation();
    }

    componentWillMount() {
        CarsParcsStore.on('change', this.setParc.bind(this));
        LocationStore.on('change', this.setLocation.bind(this));
    }

    componentWillUnmount(){
        CarsParcsStore.removeListener('change', this.setParc.bind(this));
        LocationStore.removeListener('change', this.setLocation.bind(this));
    }

    setParc() {
        var parcs = CarsParcsStore.getAll();
        const { parc } = this.props.params;

        parcs.forEach((possibleParc) => {
            if(parc == possibleParc.name)
                this.setState({
                    parc: possibleParc
                });
        });
    }

    setLocation() {
        var location = LocationStore.getCoords();
        this.setState({
            location
        });
    }

    navigationStr() {
        return "geo:"
                + this.state.location.latitude
                + "," + this.state.location.longitude
                + "?saddr=("
                + this.state.location.latitude
                + "," + this.state.location.longitude
                + ")&daddr=("
                + this.state.parc.lat
                + ","
                + this.state.parc.lng
                + ")";
    }

    render() {
        const { parc } = this.state;
        const type = parc.underground ? 'Tiefgarage' : 'Parkplatz';
        const format = (parc.updated_at) ? parc.updated_at.format('HH:mm D.M.Y') : 'Keine Zeit vorhanden';
        const navigationButton = this.state.location ? <a class="btn btn-primary col-xs-12" href={this.navigationStr()}>Navigate</a> : '';
        return (
            <div>
                <h1>Details zu {parc.name}</h1>
                <ul>
                    <li>Freie Parkplätze <b>{parc.free}</b></li>
                    <li>Anzahl Parkplätze {parc.total}</li>
                    <li>Aktualisiert um <b>{format}</b></li>
                    <li>{type}</li>
                </ul>
                <MapView lat={parc.lat} lng={parc.lng}/>
                <div class="row">
                    {navigationButton}
                </div>
            </div>
        );
    }
}

export default Details;