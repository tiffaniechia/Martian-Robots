var Grid = require("../../src/models/grid.js");
var _ = require('underscore')._;

var map = function (rawGridData) {
    rawGridData = rawGridData.split(" ");
    var data = {xAxis: parseInt(rawGridData[0]), yAxis: parseInt(rawGridData[1])};
    checkForErrors(data.xAxis, data.yAxis);
    return new Grid(data.xAxis, data.yAxis);
};

var isMoreThanFiftyCheck = function (xAxis, yAxis) {
    if (xAxis > 50 || yAxis > 50) throw new Error("Grid size cannot be greater than 50");
};

var isLessThanZeroCheck = function (xAxis, yAxis) {
    if (xAxis < 0 || yAxis < 0) throw new Error("Grid size cannot be less than 0");
};

var isNotANumberCheck = function (xAxis, yAxis) {
    if (isNaN(xAxis) || isNaN(yAxis)) throw new Error("Grid size must be a number");
};

var checkForErrors = function (xAxis, yAxis) {
    isMoreThanFiftyCheck(xAxis, yAxis);
    isLessThanZeroCheck(xAxis, yAxis);
    isNotANumberCheck(xAxis, yAxis);
};

module.exports = {
    map: map
};