/// <reference path='../typings/main.d.ts'/>

import ReactDOM = require('react-dom');
import * as React from "react";
import {Provider} from "react-redux";
import {hashHistory, Router, Route} from "react-router";
import DevTools from "./core/devtools";
import Store from "./core/store";
import App from "./containers/App";

let css = require("./styles/index.scss");
let renderNode = document.getElementById('root');
let config = require('../config.json');
let store = Store;

if ( config.enableDevTools ) {
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
} else {
    ReactDOM.render(
        <div>
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={App}/>
                </Router>
            </Provider>
        </div>,
        renderNode
    );
}
