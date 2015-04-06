var Grid = require('../../src/models/grid.js');

describe("grid", function () {
    var grid, result;

    beforeEach(function () {
        grid = new Grid(5, 3);
    });

    describe("#Initialize", function () {
        it("should create new grid with x axis and yaxis", function () {
            expect(grid.xAxis).toEqual(5);
            expect(grid.yAxis).toEqual(3);
        });

        it("should have no scents", function () {
            expect(grid.scents).toEqual([]);
        });
    });

    describe("#isOutOfGrid", function () {
        it("should know x axis lower threshold", function () {
            result = grid.isOutOfGrid(-1, 0);
            expect(result).toBeTruthy();
        });

        it("should know x axis upper threshold", function () {
            result = grid.isOutOfGrid(6, 0);
            expect(result).toBeTruthy();
        });

        it("should know y axis lower threshold", function () {
            result = grid.isOutOfGrid(3, -1);
            expect(result).toBeTruthy();
        });

        it("should know y axis upper threshold", function () {
            result = grid.isOutOfGrid(3, 4);
            expect(result).toBeTruthy();
        });

        it("should pass happy scenario", function () {
            result = grid.isOutOfGrid(3, 3);
            expect(result).toBeFalsy();
        });
    });

    describe("#setScent", function () {
        it("should be able to add a scent into Grid's scents", function () {
            grid.setScent('scent 1');
            expect(grid.scents).toEqual(['scent 1']);
        });

        it("should append new scents to Grid's scents", function () {
            grid.setScent('scent 1');
            grid.setScent('scent 2');
            expect(grid.scents).toEqual(['scent 1', 'scent 2']);
        });
    });

    describe("#isScented", function () {
        it("should be return true if is in Grid scents", function () {
            grid.scents = ['scent 1', 'scent 2'];
            result = grid.isScented('scent 1');
            expect(result).toBeTruthy();
        });

        it("should be return false if not in Grid scents", function () {
            grid.scents = ['scent 1', 'scent 2'];
            result = grid.isScented('scent 3');
            expect(result).toBeFalsy();
        });
    });

});