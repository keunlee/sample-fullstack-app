/// <reference path='../../typings/main.d.ts'/>

import ReactDOM = require('react-dom');
import * as React from "react";

export default class D3HILOChart extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    public render() {
        const {} = this.props;

        return (
            <div className="selected-chart" ref="selected-chart"></div>
        );
    }

    public componentDidMount() : void {
        let el = ReactDOM.findDOMNode<HTMLElement>(this.refs['selected-chart']);
        console.log("COMPONENT DID MOUNT");
    }
    public componentDidUpdate() : void {}
    public componentWillUnmount() : void {}

    private createChart( el : any, props : any, state : any ) : void {
        d3.select(".selected-chart").html("");
    }
    private updateChart( el : any, state : any ) : void {}
    private destoryChart( el : any ) : void {}

    private renderChart( el : any, scales : any, data : any ) : void {
        let margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        /*
        let y = d3.scale.linear()
            .range([height, 0]);

        let candlestick = techan.plot.candlestick()
            .xScale(x)
            .yScale(y);

        let xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        let yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        let svg = d3.select(".selected-chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append('text')
            .style("text-anchor", "end")
            .attr("class", "coords")
            .attr("x", width - 5)
            .attr("y", 15);
            */
    }
}