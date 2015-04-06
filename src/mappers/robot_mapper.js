var Robot = require("../../src/models/robot.js");
var  _ = require('underscore')._;

var map = function (rawRobotsData) {
    return _.map(rawRobotsData, function (rawRobotData) {
        var data = rawRobotData.split(" ");
        var parsedData = {
            xAxis: parseInt(data[0]),
            yAxis: parseInt(data[1]),
            facingDirection: data[2],
            instructions: data[3].split("")
        };
        return new Robot(parsedData.xAxis, parsedData.yAxis, parsedData.facingDirection, parsedData.instructions);
    });
};

module.exports = {
    map: map
};