describe("Game", function() {
  var game;
  var cell;

  beforeEach(function(){
    cell = jasmine.createSpyObj('cell',['isAlive']);
    game = new Game();
  });

  it("exists", function() {
    expect(game).toBeDefined();
  });

  it("contains no cells by default", function() {
    expect(game.cells()).toEqual([]);
  });

});
