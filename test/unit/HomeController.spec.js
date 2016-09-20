describe('HomeController', function() {
  beforeEach(module('rockPaperScissors')
  );

  var ctrl, PlayerService, ScoreService, state;

  beforeEach(inject(function(_PlayerService_, _ScoreService_, $controller, $state) {
    ctrl = $controller('HomeController');
    state = $state;
    PlayerService = _PlayerService_;
    ScoreService = _ScoreService_;
  }));

  describe('#startGame', function() {
    it("stores the player name in the player service", function(){
      ctrl.startGame('sity');
      expect(PlayerService.getPlayer()).toEqual('sity');
    });

    it("sets an initial score of 0 for both players", function(){
      ctrl.startGame('sity');
      expect(ScoreService.getPlayerScore()).toEqual(0);
      expect(ScoreService.getComputerScore()).toEqual(0);
    });
  });

});
