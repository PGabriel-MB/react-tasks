import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import App from './App';
import Login from "./pages/Login";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={App} />
        </Switch>
    </BrowserRouter>
)

export default Routes;