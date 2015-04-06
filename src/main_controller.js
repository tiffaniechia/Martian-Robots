var input_service = require("../src/service/input_service.js");
var grid_mapper = require('../src/mappers/grid_mapper.js');
var robot_mapper = require('../src/mappers/robot_mapper.js');
var _ = require('underscore')._;

var isRobotOffGrid = function (robot, grid) {
    return grid.isOutOfGrid(robot.xAxis, robot.yAxis);
};

var executeForwardInstruction = function (robot, grid) {
    var currentTrajectory = {xAxis: robot.xAxis, yAxis: robot.yAxis, facingDirection: robot.facingDirection};
    if (!grid.isScented(currentTrajectory)) {
        robot.move();
    }
};

var executeTurnInstruction = function (robot, instruction) {
    robot.turn(instruction);
};

var executeInstructions = function (robot, instruction, grid) {
    (instruction == 'F') ? executeForwardInstruction(robot, grid) : executeTurnInstruction(robot, instruction);
};

var moveRobotOnMars = function (robot, grid) {
    _.each(robot.instructions, function (instruction) {
        robot.isLost = false;
        if (!isRobotOffGrid(robot, grid)) {
            robot.previousXAxis = robot.xAxis;
            robot.previousYAxis = robot.yAxis;
            executeInstructions(robot, instruction, grid);
        } else {
            grid.setScent({
                xAxis: robot.previousXAxis,
                yAxis: robot.previousYAxis,
                facingDirection: robot.facingDirection
            });
            robot.isLost = true;
        }
    });
};

var main = function () {
    var grid = grid_mapper.map(input_service.getGridData());
    var robots = robot_mapper.map(input_service.getRobotsData());
    var result = _.reduce(robots, function (result, robot) {
        moveRobotOnMars(robot, grid);
        if (robot.isLost) {
            result.push([robot.previousXAxis, robot.previousYAxis, robot.facingDirection, "LOST"]);
        } else {
            result.push([robot.xAxis, robot.yAxis, robot.facingDirection]);
        }
        return result;
    }, []);

    result = result.join("\n").replace(/,/g, " ");
    return result;
};

module.exports = {
    main: main
};