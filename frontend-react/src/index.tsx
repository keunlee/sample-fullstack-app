/// <reference path='../typings/main.d.ts'/>

import React = require('react');
import ReactDOM = require('react-dom');
import Root from './containers/Root';
let css = require("./styles/index.scss");

// Render a simple React h1 component into the body.
// ReactDOM.render(<h1>Hello Typescript!</h1>, document.getElementsByTagName('body')[0]);

const renderNode = document.getElementById('root');

ReactDOM.render(<Root/>, renderNode);
