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

});
