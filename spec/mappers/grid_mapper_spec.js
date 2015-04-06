var grid_mapper = require('../../src/mappers/grid_mapper.js');
var Grid = require('../../src/models/grid.js');

describe("grid_mapper", function () {
    var result;

    describe("#map", function () {
        it("should return grid object from raw grid data", function () {
            var rawGridData = '5 3';
            result = grid_mapper.map(rawGridData);
            expect(result).toEqual(new Grid(5, 3));
        });
    });

    describe("#errors", function () {
        describe("#isMoreThanFifty Error", function () {
            it("should throw an error if grid data y axis is more than 50", function () {
                expect(function () {grid_mapper.map('5 51')}).toThrow(new Error("Grid size cannot be greater than 50"));
            });

            it("should throw an error if grid data y axis is more than 50", function () {
                expect(function () {grid_mapper.map('51 5')}).toThrow(new Error("Grid size cannot be greater than 50"));
            });
        });

        describe("#isLessThanZero Error", function () {
            it("should throw an error if grid data x axis less than 0", function () {
                expect(function () {grid_mapper.map('-1 5')}).toThrow(new Error("Grid size cannot be less than 0"));
            });

            it("should throw an error if grid data y axis less than 0", function () {
                expect(function () { grid_mapper.map('5 -1')}).toThrow(new Error("Grid size cannot be less than 0"));
            });
        });

        describe("#isNotANumber Error", function () {
            it("should throw an error if grid data x axis not a number", function () {
                expect(function () {grid_mapper.map('k 5')}).toThrow(new Error("Grid size must be a number"));
            });

            it("should throw an error if grid data y axis not a number", function () {
                expect(function () {grid_mapper.map('5 k')}).toThrow(new Error("Grid size must be a number"));
            });
        });
    });
});
