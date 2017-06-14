function Cell() {
  this.isAlive = false;
}

Cell.prototype.setAlive = function () {
  this.isAlive = true;
};

Cell.prototype.setDead = function () {
  this.isAlive = false;
};
