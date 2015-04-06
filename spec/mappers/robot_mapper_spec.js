var robot_mapper = require('../../src/mappers/robot_mapper.js');
var Robot = require('../../src/models/robot.js');

describe("robot_mapper", function () {
    var result;

    describe("#map", function () {
        it("should return robot objects from raw robots data", function () {
            var rawRobotsData = ["1 1 E LF", "3 2 N LF"];
            result = robot_mapper.map(rawRobotsData);
            expect(result).toEqual([new Robot(1, 1, "E", ["L", "F"]), new Robot(3, 2, "N", ["L", "F"])]);
        });
    });

    describe("#errors", function () {
        describe("#isNotANumber Error", function () {
            it("should throw an error if robot data x axis not a number", function () {
                expect(function () {robot_mapper.map(["k 1 E LF"])}).toThrow(new Error("Robot axis must be a number"));
            });

            it("should throw an error if robot data y axis not a number", function () {
                expect(function () {robot_mapper.map(["1 k E LF"])}).toThrow(new Error("Robot axis must be a number"));
            });
        });

        describe("#isNotAValidDirection Error", function () {
            it("should throw an error if robot facing direction not N, S, E, or W", function () {
                expect(function () {robot_mapper.map(["1 1 K LF"])}).toThrow(new Error("Robot facing direction must be N, S, E, or W"));
            });
        });

        describe("#isNotAMovementInstruction Error", function () {
            it("should throw an error if robot instruction not L, R, or F", function () {
                expect(function () {robot_mapper.map(["1 1 N KK"])}).toThrow(new Error("Robot instruction must be L, R, or F"));
            });
        });

        describe("#isMoreThanHundredInstructions", function () {
            it("should throw an error if robot instruction more than 100 characters", function () {
                expect(function () {robot_mapper.map(["1 1 N LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLR"])}).toThrow(new Error("Robot instructions must be less than 100"));
            });
        });
    });
});