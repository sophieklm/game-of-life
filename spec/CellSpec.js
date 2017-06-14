describe("Cell", function() {
  var cell;

  beforeEach(function(){
    cell = new Cell();
    game = jasmine.createSpyObj('game',['', '']);
  });

  it("exists", function() {
    expect(cell).toBeDefined();
  });

  it('can be dead', function() {
    expect(cell.isAlive).toBe(false);
  });

  it('can be set to alive', function() {
    cell.setAlive();
    expect(cell.isAlive).toBe(true);
  });

  it('can have no neighbours', function() {
    expect(cell.neighbours).toEqual([]);
  });

  it('can have neighbours', function() {
    cell.addNeighbour(new Cell());
    expect(cell.neighbours[0] instanceof Cell).toBe(true);
  });

  it('dies if it has less than 2 live neighbours', function() {
    cell.checkSurvival();
    expect(cell.willLive).toBe(false);
  });

  it('can count alive neighbours', function() {
    deadCell = new Cell();
    aliveCell = new Cell();
    aliveCell.setAlive();
    cell.addNeighbour(deadCell);
    cell.addNeighbour(aliveCell);
    expect(cell.countAliveNeighbours()).toEqual(1);
  });

  it('continues living if it has 2-3 live neighbours', function() {
    cell.setAlive();
    for(var i = 0; i < 2; i++) {
      newCell = new Cell();
      newCell.setAlive();
      cell.addNeighbour(newCell);
    }
    cell.checkSurvival();
    expect(cell.willLive).toBe(true);
  });

  it('is set alive if it was dead but has 3 live neighbours', function() {
    for(var i = 0; i < 2; i++) {
      newCell = new Cell();
      newCell.setAlive();
      cell.addNeighbour(newCell);
    }
    cell.checkSurvival();
    expect(cell.willLive).toBe(true);
  });

  it('is set dead if it has more than 3 live neighbours', function() {
    cell.setAlive();
    for(var i = 0; i < 4; i++) {
      newCell = new Cell();
      newCell.setAlive();
      cell.addNeighbour(newCell);
    }
    cell.checkSurvival();
    expect(cell.willLive).toBe(false);
  });

});
