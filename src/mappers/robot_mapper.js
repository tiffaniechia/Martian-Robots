var Robot = require("../../src/models/robot.js");
var _ = require('underscore')._;

var map = function (rawRobotsData) {
    return _.map(rawRobotsData, function (rawRobotData) {
        var data = rawRobotData.split(" ");
        var parsedData = {
            xAxis: parseInt(data[0]),
            yAxis: parseInt(data[1]),
            facingDirection: data[2],
            instructions: data[3].split("")
        };
        checkForErrors(parsedData.xAxis, parsedData.yAxis, parsedData.facingDirection, parsedData.instructions);
        return new Robot(parsedData.xAxis, parsedData.yAxis, parsedData.facingDirection, parsedData.instructions);
    });
};

var isNotANumberCheck = function (xAxis, yAxis) {
    if (isNaN(xAxis) || isNaN(yAxis)) throw new Error("Robot axis must be a number");
};

var isNotAValidDirection = function (facingDirection) {
    if (!(facingDirection == 'N' || facingDirection == 'S' || facingDirection == 'E' || facingDirection == 'W')) throw new Error("Robot facing direction must be N, S, E, or W");
};

var isNotAMovementInstruction = function (instructions) {
    return _.each(instructions, function (instruction) {
        if (!(instruction == 'L' || instruction == 'R' || instruction == 'F')) throw new Error("Robot instruction must be L, R, or F");
    });
};

var isMoreThanHundredInstructions = function (instructions) {
    if (instructions.length > 100) throw new Error("Robot instructions must be less than 100");
};

var checkForErrors = function (xAxis, yAxis, facingDirection, instructions) {
    isNotANumberCheck(xAxis, yAxis);
    isNotAValidDirection(facingDirection);
    isMoreThanHundredInstructions(instructions);
    isNotAMovementInstruction(instructions);
};

module.exports = {
    map: map
};