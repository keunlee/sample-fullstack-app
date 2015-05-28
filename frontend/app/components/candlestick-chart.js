/*global $, d3, techan, moment*/
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
    var data = result.query.results.quote;

    var margin = {top: 20, right: 50, bottom: 30, left: 30},
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

    var xTopAxis = d3.svg.axis()
      .scale(x)
      .orient("top");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

    var yRightAxis = d3.svg.axis()
      .scale(y)
      .orient("right");

    var ohlcAnnotation = techan.plot.axisannotation()
      .axis(yAxis)
      .accessor(candlestick.accessor())
      .format(d3.format(',.2fs'));

    var ohlcRightAnnotation = techan.plot.axisannotation()
      .axis(yRightAxis)
      .accessor(candlestick.accessor())
      .translate([width, 0]); // Translation can be optionally set here, or over the group

    var timeAnnotation = techan.plot.axisannotation()
      .axis(xAxis)
      .accessor(candlestick.accessor().d)
      .format(d3.time.format('%Y-%m-%d'))
      .width(65);

    var timeTopAnnotation = techan.plot.axisannotation()
      .accessor(candlestick.accessor().d)
      .axis(xTopAxis);

    var svg = d3.select(".selected-chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var accessor = candlestick.accessor();

    data = data.slice(0, 200).map(function (d) {
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
      .call(xTopAxis);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

    svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yRightAxis);

    svg.append("g")
      .attr("class", "y annotation left")
      .datum([data[130], data[100], data[0]])
      .call(ohlcAnnotation);

    svg.append("g")
      .attr("class", "x annotation bottom")
      .attr("transform", "translate(0," + height + ")")
      .datum([data[30]])
      .call(timeAnnotation);

    svg.append("g")
      .attr("class", "y annotation right")
      .datum([data[188], data[80]])
      .call(ohlcRightAnnotation);

    svg.append("g")
      .attr("class", "x annotation top")
      .datum([data[80]])
      .call(timeTopAnnotation);
  }
});
