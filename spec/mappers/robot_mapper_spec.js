var robot_mapper = require('../../src/mappers/robot_mapper.js');
var Robot = require('../../src/models/robot.js');

describe("robot_mapper", function(){
    var result;

    it("should return robot objects from raw robots data", function(){
        var rawRobotsData = ["1 1 E LF", "3 2 N LF"];
        result = robot_mapper.map(rawRobotsData);
        expect(result).toEqual([new Robot(1, 1, "E", ["L","F"]), new Robot(3, 2, "N", ["L","F"])]);
    });
});