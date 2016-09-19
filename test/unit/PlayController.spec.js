describe('PlayController', function() {
  beforeEach(module('rockPaperScissors')
  );

  var ctrl, PlayerService, GameService, ScoreService, ComputerService, state;

  beforeEach(inject(function(_PlayerService_, _GameService_, _ScoreService_, _ComputerService_, $controller, $state) {
    ctrl = $controller('PlayController');
    state = $state;
    PlayerService = _PlayerService_;
    ScoreService = _ScoreService_;
    GameService = _GameService_;
    ComputerService = _ComputerService_;

  }));

  // i need to do homectrl.startGame to set the initial scores of 0 for each..

  it("plays a move", function(){
    ctrl.play('rock');
    expect(ctrl.playerMove).toEqual('rock');
    // how do i stub out the computer move?
  });

  xit("resets the scores", function(){
    ctrl.startGame('sity');
    expect(ScoreService.getPlayerScore()).toEqual(0);
    expect(ScoreService.getComputerScore()).toEqual(0);
  });
});
