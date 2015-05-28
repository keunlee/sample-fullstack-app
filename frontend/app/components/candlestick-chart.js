/*global $, d3, techan, moment, bootbox*/
import Ember from 'ember';

export default
Ember.Component.extend({
    tagName: 'div',
    attributeBindings: ['style'],
    style: '',

    selectedItem: null,
    onChange: function () {
        var self = this;
        var selectedItem = self.get('selectedItem');

        if (selectedItem) {
            d3.select(".selected-chart").html("");

            var symbol = selectedItem.symbol;
            var startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
            var endDate = moment().format('YYYY-MM-DD');

            var yqlURL = "http://query.yahooapis.com/v1/public/yql?q=";
            var dataFormat = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
            var historicalQ = yqlURL + "select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22" + symbol + "%22%20and%20startDate%20%3D%20%22" + startDate + "%22%20and%20endDate%20%3D%20%22" + endDate + "%22" + dataFormat;

            $.ajax({
                url: historicalQ,
                dataType: 'json',
                method: 'GET'
            }).done(function (data) {
                console.log(symbol);
                self.renderChart(data);
            }).fail(function () {
            });
        }

    }.observes('selectedItem').on('init'),

    renderChart: function (result) {
        var results = result.query.results;

        if ( results == null ) {
            bootbox.alert("Insufficient historical stock data. Can not render the selected stock", function() {});
            return;
        }

        var data = results.quote;

        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x = techan.scale.financetime()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var candlestick = techan.plot.candlestick()
            .xScale(x)
            .yScale(y);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var svg = d3.select(".selected-chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append('text')
            .style("text-anchor", "end")
            .attr("class", "coords")
            .attr("x", width - 5)
            .attr("y", 15);

        var accessor = candlestick.accessor();

        data = data.slice(0).map(function (d) {
            return {
                date: new Date(d.Date),
                open: +d.Open,
                high: +d.High,
                low: +d.Low,
                close: +d.Close,
                volume: +d.Volume
            };
        }).sort(function (a, b) {
            return d3.ascending(accessor.d(a), accessor.d(b));
        });

        x.domain(data.map(accessor.d));
        y.domain(techan.scale.plot.ohlc(data, accessor).domain());

        svg.append("g")
            .datum(data)
            .attr("class", "candlestick")
            .call(candlestick);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Price ($)");
    }
});
