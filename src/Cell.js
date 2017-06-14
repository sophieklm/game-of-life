function Cell() {
  this.isAlive = false;
  this.neighbours = [];
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
