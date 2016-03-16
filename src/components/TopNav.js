import React from 'react'

class TopNav extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Parkplätze Münster</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNav;