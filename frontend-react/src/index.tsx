/// <reference path='../typings/main.d.ts'/>

import ReactDOM = require('react-dom');
import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, Store, applyMiddleware, compose} from 'redux';
import {hashHistory, Router, Route} from "react-router"
import {createDevTools, persistState} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


import * as reducers from './reducers';
import App from "./containers/App";

let css = require("./styles/index.scss");
let reducer = combineReducers(reducers);
let renderNode = document.getElementById('root');

let DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'>
        <LogMonitor />
    </DockMonitor>
);

let finalCreateStore = compose(
    DevTools.instrument(),
    persistState('test-session')
)(createStore);

let store : Store = finalCreateStore(reducer, {});

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}/>
            </Router>
        </Provider>
        <DevTools store={store}/>
    </div>
    ,
    renderNode
);
