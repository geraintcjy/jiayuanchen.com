import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";

import Home from './Home/Home';

export const App = () => {
    return (
        <div>
            <Home />
        </div>
    );
}