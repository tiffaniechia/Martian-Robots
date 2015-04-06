var fs = require('fs');
var _ = require('underscore')._;

var parseInputData = function(){
    var inputData  = fs.readFileSync('input.txt', 'utf8');
    return _.compact(inputData.split("\n"));
};

var getGridData = function(){
    return parseInputData()[0];
};

var getRawRobotsData = function(){
    var rawRobotsData = parseInputData();
    rawRobotsData.shift();
    return rawRobotsData;
};

var getRobotsData = function(){
    var index, rawRobotsData = getRawRobotsData();
    return _.reduce(rawRobotsData, function (result, input) {
        index = _.indexOf(rawRobotsData, input);
        if (index % 2 == 0) {
            result.push(input.concat(" " + rawRobotsData[index + 1]))
        }
        return result
    }, []);
};

module.exports = {
    getGridData:getGridData,
    getRobotsData: getRobotsData
};

