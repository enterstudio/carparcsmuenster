import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from "react-router";

import Layout from './Layout.js';
import Index from './pages/Index.js';

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Route path="/" component={Layout}>
            <IndexRoute component={Index}></IndexRoute>
            <Route path="index" name="index" component={Index}></Route>
        </Route>
    </Router>
    , app);
