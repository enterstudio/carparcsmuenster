import React from 'react';
import $ from 'jquery';

export default class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            parcButtons: []
        };

        this.parcButtons = null;
        this.getParcs();
    }

    getParcs() {
        var self = this;
        $.ajax({
            url: 'https://parkleit-api.codeformuenster.org/',
            success: function (data) {
                var parcs = JSON.parse(data).features;
                var parcsButtons = [];
                parcs.forEach((parcInfo) => {
                    var parcProps = parcInfo.properties;
                    parcsButtons.push(<p><button className="btn btn-default">{parcProps.name} ({parcProps.free}/{parcProps.total})</button></p>);
                });

                self.setState({
                    parcButtons: parcsButtons
                })
            }
        });
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>Finde Parkplätze</h1>
                </div>
                {this.state.parcButtons}
            </div>
        );
    }
}