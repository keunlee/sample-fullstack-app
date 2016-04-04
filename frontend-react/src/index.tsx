/// <reference path='../typings/main.d.ts'/>

import ReactDOM = require('react-dom');
import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, Store} from 'redux';
import {hashHistory, Router, Route} from "react-router"

import * as reducers from './reducers';
import App from "./containers/App";

let css = require("./styles/index.scss");
let reducer = combineReducers(reducers);
let store : Store = createStore(reducer, {});
let renderNode = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    renderNode
);
