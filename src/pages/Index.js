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
            parcs: CarParcsStore.getAll()
        });
    }

    componentWillMount() {
        CarParcsStore.on('change', this.updateParcs);
    }

    componentWillUnmount() {
        CarParcsStore.removeListener('change', this.updateParcs);
    }

    renderParcButtons(parc) {
        return <button class="btn btn-primary col-xs-12">{parc.name}({parc.free}/{parc.total})</button>
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