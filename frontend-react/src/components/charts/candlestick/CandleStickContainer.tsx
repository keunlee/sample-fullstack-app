/// <reference path='../../../../typings/main.d.ts'/>

import ReactDOM = require('react-dom');
import * as React from "react";
import CandleStick from "./CandleStick";

export default class CandleStickContainer extends React.Component<any, any> {
    private candleStick : CandleStick;

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedStockData : {}
        };
    }

    public render() {
        const { selectedStockData } = this.props;

        return (
            <div className="selected-chart" ref="selected-chart"></div>
        );
    }

    public componentWillReceiveProps(newProps : any, oldProps : any) {
        this.setState({
            selectedStockData : newProps.selectedStockData
        });

        let selectedStockData = newProps.selectedStockData;
        if ( selectedStockData.query && selectedStockData.query.results && selectedStockData.query.results.quote.length > 0 ) {
            this.candleStick.buildChart( selectedStockData.query.results.quote );
        }
    }

    public componentDidMount() : void {
        // create initial element here
        this.candleStick = new CandleStick();
    }

    public componentDidUpdate( prevProps : any, prevState : any ) : void {
    }

    public componentWillUnmount() : void {
    }
}