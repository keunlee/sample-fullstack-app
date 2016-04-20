/// <reference path='../../../../typings/main.d.ts'/>

import ReactDOM = require('react-dom');
import * as React from "react";

export default class CandleStickContainer extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    public render() {
        const {} = this.props;

        return (
            <div className="selected-chart" ref="selected-chart"></div>
        );
    }

    public componentDidMount() : void {}
    public componentDidUpdate() : void {}
    public componentWillUnmount() : void {}
}