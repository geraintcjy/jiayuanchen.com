import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './Home/Home';
import Submitted from './Submitted/Submitted'

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" render={()=><Redirect to="/home" />} />
                <Route path = "/home" component = {Home} />
                <Route path = "/submit" component = {Submitted} />
            </Switch>
        </BrowserRouter>
    );
}