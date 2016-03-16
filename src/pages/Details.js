import React from 'react';
import moment from 'moment';
import CarsParcsStore from '../stores/CarParcsStore';
import * as Actions from '../actions/CarParcsActions';

import MapView from '../components/MapView';

class Details extends React.Component {
    constructor() {
        super();

        this.state = {
            parc: {}
        };
        Actions.getCarParcs();
    }

    componentWillMount() {
        CarsParcsStore.on('change', this.setParc.bind(this));
    }

    componentWillUnmount(){
        CarsParcsStore.removeListener('change', this.setParc.bind(this));
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

    render() {
        const { parc } = this.state;
        const type = parc.underground ? 'Tiefgarage' : 'Parkplatz';
        const format = (parc.updated_at) ? parc.updated_at.format('HH:mm D.M.Y') : 'Keine Zeit vorhanden';
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
                <button class="btn btn-primary">Navigate</button>
            </div>
        );
    }
}

export default Details;