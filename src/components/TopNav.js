import React from 'react'

class TopNav extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Parkplätze Münster</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <form class="navbar-form navbar-right">
                            <input type="text" class="form-control" placeholder="Suche ..."/>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNav;