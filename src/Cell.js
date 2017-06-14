function Cell() {
  this.isAlive = false;
  this.neighbours = [];
  this.willLive = null;
}

Cell.prototype.setAlive = function () {
  this.isAlive = true;
};

Cell.prototype.setDead = function () {
  this.isAlive = false;
};

Cell.prototype.addNeighbour = function (cell) {
  this.neighbours.push(cell);
};

Cell.prototype.checkSurvival = function () {
  this.willLive = false;
  if((this.isAlive = true && this.countAliveNeighbours() == 2) || this.countAliveNeighbours() == 3){
    this.willLive = true;
  }
};

Cell.prototype.countAliveNeighbours = function () {
  var aliveNeighbours = this.neighbours.filter(function(neighbour) {
    if(neighbour.isAlive) {
      return neighbour;
    }
  });
  return aliveNeighbours.length;
};
