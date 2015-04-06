var main_controller = require("../src/main_controller.js");
var grid_mapper = require('../src/mappers/grid_mapper.js');
var robot_mapper = require('../src/mappers/robot_mapper.js');
var Grid = require('../src/models/grid.js');
var Robot = require('../src/models/robot.js');


describe("main_controller", function () {
    var result;

    beforeEach(function () {
        spyOn(grid_mapper, 'map').andReturn(new Grid(5, 3));
    });

    describe("#main", function () {
        it("should be able to execute movement of a single robot on mars", function () {
            spyOn(robot_mapper, 'map').andReturn([new Robot(1, 1, "E", "RFRFRFRF")]);
            result = main_controller.main();
            expect(result).toEqual('1 1 E');
        });

        it("should be stop execution if off grid", function () {
            spyOn(robot_mapper, 'map').andReturn([new Robot(3, 2, "N", "FRRFLLFFFFFF")]);
            result = main_controller.main();
            expect(result).toEqual('3 3 N LOST');
        });

        it("should be able to execute multiple robots on mars", function () {
            spyOn(robot_mapper, 'map').andReturn([new Robot(3, 2, "N", "FF"), new Robot(0, 3, "E", "FF")]);
            result = main_controller.main();
            expect(result).toEqual('3 4 N\n2 3 E');
        });

        it("should skip forward if trajectory matches a scent", function () {
            spyOn(robot_mapper, 'map').andReturn([new Robot(3, 2, "N", "FRRFLLFFRRFLL"), new Robot(0, 3, "W", "LLFFFLFLFL")]);
            result = main_controller.main();
            expect(result).toEqual('3 3 N LOST\n2 3 S');
        });
    });
});