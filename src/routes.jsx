import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import { Dashboard } from './pages/dashboard';
import { Register } from './pages/Register';
import Login from "./pages/Login";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register}/>
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
)

export default Routes;