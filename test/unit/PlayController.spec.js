describe('PlayController', function() {
  beforeEach(module('rockPaperScissors')
  );

  var ctrl, PlayerService, GameService, ScoreService, ComputerService, state;

  beforeEach(inject(function(_PlayerService_, _ScoreService_, __ComputerService__, $controller, $state) {
    ctrl = $controller('PlayController');
    state = $state;
    PlayerService = _PlayerService_;
    ScoreService = _ScoreService_;
    GameService = __GameService__;
    COmputerService = __ComputerService__;

  }));


  it("plays a computer move", function(){
    ctrl.play
    expect(PlayerService.getPlayer()).toEqual('sity');
  });

  it("sets an initial score of 0 for both players", function(){
    ctrl.startGame('sity');
    expect(ScoreService.getPlayerScore()).toEqual(0);
    expect(ScoreService.getComputerScore()).toEqual(0);
  });
});
