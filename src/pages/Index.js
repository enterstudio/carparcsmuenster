import React from 'react';
import CarParcsStore from '../stores/CarParcsStore';
import * as CarParcsActions from '../actions/CarParcsActions';

export default class Index extends React.Component {
    constructor() {
        super();

        this.updateParcs = this.updateParcs.bind(this);
        this.state = {
            parcs: []
        };

        CarParcsActions.getCarParcs();
    }

    updateParcs() {
        this.setState({
            parcs: CarParcsStore.getAll().sort(function (a, b) {
                if(a.free_percent < b.free_percent)
                    return -1;
                if(a.free_percent > b.free_percent)
                    return 1;
                return 0;
            })
        });
    }

    componentWillMount() {
        CarParcsStore.on('change', this.updateParcs);
    }

    componentWillUnmount() {
        CarParcsStore.removeListener('change', this.updateParcs);
    }

    renderParcButtons(parc, index) {
        return <a key={index} class="btn btn-primary col-xs-12" href={"#/details/" + encodeURIComponent(parc.name)}>{parc.name} ({parc.free_percent}% frei)</a>
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>Finde Parkplätze</h1>
                </div>
                {this.state.parcs.map(this.renderParcButtons.bind(this))}
            </div>
        );
    }
}