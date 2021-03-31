import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";

export const App = () => {
    return (
        <div className="App" style = {{color: 'black'}}>
            <h1>帅哥的主页</h1>
            <h2>毕设有点搞，晚点再弄</h2>
        </div>
    );
}