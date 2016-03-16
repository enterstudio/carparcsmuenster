import React from "react";
import TopNav from '../components/TopNav';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <TopNav />
                <div style={{paddingTop: '80px'}}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}