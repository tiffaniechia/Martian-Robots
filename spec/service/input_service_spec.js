var input_service = require("../../src/service/input_service.js");
var fs = require('fs');

describe("input_service", function () {
    var instructions, result;

    beforeEach(function () {
        instructions = '5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL';
        spyOn(fs, 'readFileSync').andReturn(instructions);
    });

    describe("#getGridData", function () {
        it("should return grid information from input", function () {
            result = input_service.getGridData();
            expect(result).toEqual('5 3');
        });
    });

    describe("#getRobotsData", function () {
        it("should return robots information from input", function () {
            result = input_service.getRobotsData();
            expect(result).toEqual(["1 1 E RFRFRFRF", "3 2 N FRRFLLFFRRFLL", "0 3 W LLFFFLFLFL"]);
        });
    });

});
