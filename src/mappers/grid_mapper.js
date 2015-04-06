var Grid = require("../../src/models/grid.js");
var  _ = require('underscore')._;

var map = function (rawGridData) {
    rawGridData = rawGridData.split(" ");
    var data = {xAxis: parseInt(rawGridData[0]), yAxis: parseInt(rawGridData[1])};
    return new Grid(data.xAxis, data.yAxis);
};

module.exports = {
    map: map
};