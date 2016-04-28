/// <reference path='../../../../typings/main.d.ts'/>
let d3 = require('d3');

export default class CandleStick {
    private width = 900;
    private height = 500;
    private dateFormat = d3.time.format("%Y-%m-%d");
    private end = new Date();
    private start = new Date(this.end.getTime() - 1000 * 60 * 60 * 24 * 60);
    private data = [];

    public buildChart(data) : void {
        let self : CandleStick = this;
        let margin = 50;

        d3.select(".selected-chart").html("");

        let svg = d3.select(".selected-chart")
            .append("svg:svg")
            .attr("class", "chart")
            .attr("width", this.width)
            .attr("height", this.height);

        let y = d3.scale.linear()
            .domain([d3.min(data.map(function (x) {
                return x["Low"];
            })), d3.max(data.map(function (x) {
                return x["High"];
            }))])
            .range([self.height - margin, margin]);

        let x = d3.scale.linear()
            .domain([
                d3.min(data.map(function (d) {
                    return self.dateFormat.parse(d.Date).getTime();
                })),
                d3.max(data.map(function (d) {
                    return self.dateFormat.parse(d.Date).getTime();
                }))
            ])
            .range([margin, self.width - margin]);

        svg.selectAll("line.x")
            .data(x.ticks(10))
            .enter().append("svg:line")
            .attr("class", "x")
            .attr("x1", x)
            .attr("x2", x)
            .attr("y1", margin)
            .attr("y2", self.height - margin)
            .attr("stroke", "#ccc");

        svg.selectAll("line.y")
            .data(y.ticks(10))
            .enter().append("svg:line")
            .attr("class", "y")
            .attr("x1", margin)
            .attr("x2", self.width - margin)
            .attr("y1", y)
            .attr("y2", y)
            .attr("stroke", "#ccc");

        svg.selectAll("text.xrule")
            .data(x.ticks(10))
            .enter().append("svg:text")
            .attr("class", "xrule")
            .attr("x", x)
            .attr("y", self.height - margin)
            .attr("dy", 20)
            .attr("text-anchor", "middle")
            .text(function (d) {
                var date = new Date(d * 1000);
                return (date.getMonth() + 1) + "/" + date.getDate();
            });

        svg.selectAll("text.yrule")
            .data(y.ticks(10))
            .enter().append("svg:text")
            .attr("class", "yrule")
            .attr("x", self.width - margin)
            .attr("y", y)
            .attr("dy", 0)
            .attr("dx", 20)
            .attr("text-anchor", "middle")
            .text(function(d) {
                return d.toFixed(2);
            });

        svg.selectAll("rect")
            .data(data)
            .enter().append("svg:rect")
            .attr("x", function (d) {
                return x(self.dateFormat.parse(d['Date']).getTime());
            })
            .attr("y", function (d) {
                return y(self.max(d['Open'], d['Close']));
            })
            .attr("height", function (d) {
                return y(self.min(d['Open'], d['Close'])) - y(self.max(d['Open'], d['Close']));
            })
            .attr("width", function (d) {
                return 0.5 * (self.width - 2 * margin) / data.length;
            })
            .attr("fill", function (d) {
                return d['Open'] > d['Close'] ? "red" : "green";
            });

        svg.selectAll("line.stem")
            .data(data)
            .enter().append("svg:line")
            .attr("class", "stem")
            .attr("x1", function (d) {
                return x(self.dateFormat.parse(d['Date']).getTime()) + 0.25 * (self.width - 2 * margin) / data.length;
            })
            .attr("x2", function (d) {
                return x(self.dateFormat.parse(d['Date']).getTime()) + 0.25 * (self.width - 2 * margin) / data.length;
            })
            .attr("y1", function (d) {
                return y(d['High']);
            })
            .attr("y2", function (d) {
                return y(d['Low']);
            })
            .attr("stroke", function (d) {
                return d['Open'] > d['Close'] ? "red" : "green";
            })
    }

    private min(a, b) : any {
        return a < b ? a : b;
    }

    private max(a, b) : any {
        return a > b ? a : b;
    }
}