describe('ResultController', function() {
  beforeEach(module('rockPaperScissors')
  );

  var ctrl, ScoreService, state;

  beforeEach(inject(function(_ScoreService_, _ComputerService_, $controller, $state) {
    ctrl = $controller('ResultController');
    state = $state;
    ScoreService = _ScoreService_;
  }));

describe('#gameResult', function() {
  it("returns the game result", function(){
    ctrl.playerScore = 1;
    ctrl.computerScore = 3;
    expect(ctrl.gameResult()).toEqual('Super Sity wins!');
  });
});

describe('#restart', function(){
  it('resets the scores of both players', function(){
    ScoreService.playerScore = 1;
    ScoreService.computerScore = 3;
    ctrl.restart();
    expect(ScoreService.playerScore).toEqual(0);
    expect(ScoreService.computerScore).toEqual(0);
  });
});

});
