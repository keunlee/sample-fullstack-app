/// <reference path='../typings/main.d.ts'/>

import ReactDOM = require('react-dom');
import * as React from 'react';
import {Provider} from 'react-redux';
import {hashHistory, Router, Route} from "react-router"
import DevTools from './core/devtools';
import Store from './core/store';
import App from "./containers/App";

let css = require("./styles/index.scss");
let renderNode = document.getElementById('root');
let store = Store;

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}/>
            </Router>
        </Provider>
        <DevTools store={store}/>
    </div>,
    renderNode
);
