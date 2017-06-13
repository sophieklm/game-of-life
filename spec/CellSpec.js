describe("Cell", function() {
  var cell;

  beforeEach(function(){
    cell = new Cell();
    game = jasmine.createSpyObj('game',['', '']);
  });

  it("exists", function() {
    expect(cell).toBeDefined();
  });
});
