var Robot = require('../../src/models/robot.js');

describe("robot", function () {
    var robot, result;

    beforeEach(function () {
        robot = new Robot(5, 3, "N", "LL");
    });

    describe("Initialize", function () {
        it("should initialize with x axis, yaxis, facing direction, and instructions", function () {
            expect(robot.xAxis).toEqual(5);
            expect(robot.yAxis).toEqual(3);
            expect(robot.facingDirection).toEqual("N");
            expect(robot.instructions).toEqual("LL");
        });
    });

    describe("#turn", function () {
        it("should be able to turn left", function () {
            robot.facingDirection = "N";
            robot.turn("L");
            expect(robot.facingDirection).toEqual("W");
        });

        it("should be able to turn right", function () {
            robot.facingDirection = "E";
            robot.turn("R");
            expect(robot.facingDirection).toEqual("S");
        });
    });

    describe("#move", function () {
        beforeEach(function () {
            robot.xAxis = 5;
            robot.yAxis = 3;
        });

        it("should be able to move towards the north", function () {
            robot.facingDirection = "N";
            robot.move();
            expect(robot.xAxis).toEqual(5);
            expect(robot.yAxis).toEqual(4);
        });

        it("should be able to move towards the south", function () {
            robot.facingDirection = "S";
            robot.move();
            expect(robot.xAxis).toEqual(5);
            expect(robot.yAxis).toEqual(2);
        });

        it("should be able to move towards the east", function () {
            robot.facingDirection = "E";
            robot.move();
            expect(robot.xAxis).toEqual(6);
            expect(robot.yAxis).toEqual(3);
        });

        it("should be able to move towards the north", function () {
            robot.facingDirection = "W";
            robot.move();
            expect(robot.xAxis).toEqual(4);
            expect(robot.yAxis).toEqual(3);
        });
    });
});