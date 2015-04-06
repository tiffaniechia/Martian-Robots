var Robot = function(xAxis, yAxis, facingDirection, instructions){
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.facingDirection = facingDirection;
    this.instructions = instructions;
};

Robot.prototype.turn = function (direction) {
    var turning = {
        'L': {'N': 'W', 'E': 'N', 'S': 'E', 'W': 'S'},
        'R': {'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N'}
    };

    this.facingDirection = turning[direction][this.facingDirection];
};

Robot.prototype.move = function () {
    var forwardDirection = {
        'N': {xAxis: this.xAxis, yAxis: this.yAxis + 1},
        'S': {xAxis: this.xAxis, yAxis: this.yAxis - 1},
        'E': {xAxis: this.xAxis + 1, yAxis: this.yAxis},
        'W': {xAxis: this.xAxis - 1, yAxis: this.yAxis}
    };

    this.xAxis = forwardDirection[this.facingDirection].xAxis;
    this.yAxis = forwardDirection[this.facingDirection].yAxis;
};

module.exports = Robot;