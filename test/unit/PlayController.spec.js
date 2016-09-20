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

  describe('#play', function() {

    beforeEach(function(){
      ctrl.play('rock');
    });

    it("stores the player's move", function(){
      expect(ctrl.playerMove).toEqual('rock');
    });

    it("stores the computer's move", function(){
      expect(ctrl.computerMove).toMatch(('rock'||'paper'||'scissors'));
    });
  });

  describe('#resetScores', function() {
    it("resets the scores of both players", function(){
      ctrl.playerScore = 2;
      ctrl.computerScore = 1;
      ctrl.resetScores();
      expect(ctrl.playerScore).toEqual(0);
      expect(ctrl.computerScore).toEqual(0);
    });
  });

});
