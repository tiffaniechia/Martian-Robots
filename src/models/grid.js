var _ = require('underscore')._;

var Grid = function (xAxis, yAxis) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.scents = [];
};

Grid.prototype.isOutOfGrid = function (xAxis, yAxis) {
    return (xAxis < 0 || yAxis < 0 || xAxis > this.xAxis || yAxis > this.yAxis);
};

Grid.prototype.setScent = function (scent) {
    this.scents.push(scent);
};

Grid.prototype.isScented = function (input) {
    return _.find(this.scents, function (scent) {
        return _.isEqual(scent, input);
    })
};

module.exports = Grid;