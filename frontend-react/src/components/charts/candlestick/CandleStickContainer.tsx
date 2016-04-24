/// <reference path='../../../../typings/main.d.ts'/>

import ReactDOM = require('react-dom');
import * as React from "react";
import CandleStick from "./CandleStick";

export default class CandleStickContainer extends React.Component<any, any> {
    private candleStick : CandleStick;

    constructor(props, context) {
        super(props, context);
    }

    public render() {
        const {} = this.props;

        return (
            <div className="selected-chart" ref="selected-chart">CHART CONTAINER</div>
        );
    }

    public componentWillReceiveProps(newProps : any, oldProps : any) {
        console.log("COMPONENT WILL RECIEVE PROPS");
    }

    public componentDidMount() : void {
        console.log("COMPONENT DID MOUNT");
        // create initial element here
        this.candleStick = new CandleStick();
    }

    public componentDidUpdate( prevProps : any, prevState : any ) : void {
        console.log("COMPONENT DID UPDATE");
    }

    public componentWillUnmount() : void {
        console.log("COMPONENT WILL UNMOUNT");
    }
}