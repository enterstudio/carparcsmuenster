import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from "react-router";
import { createHistory } from 'history';

import Layout from './pages/Layout.js';
import Index from './pages/Index.js';
import Details from './pages/Details';

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Route path="/" component={Layout}>
            <IndexRoute component={Index}/>
            <Route path="index" name="index" component={Index}/>
            <Route path="details(/:parc)" name="details" component={Details}/>
        </Route>
    </Router>
    , app);
