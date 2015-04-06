var grid_mapper = require('../../src/mappers/grid_mapper.js');
var Grid = require('../../src/models/grid.js');

describe("grid_mapper", function(){
    var result;

    it("should return grid object from raw grid data", function(){
        var rawGridData = '5 3';
        result = grid_mapper.map(rawGridData);
        expect(result).toEqual(new Grid(5,3));
    });
});
