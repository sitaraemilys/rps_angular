describe('PlayerService', function() {
  beforeEach(module('rockPaperScissors')
  );

  var PlayerService;

  beforeEach(inject(function(_PlayerService_) {
    playerService = _PlayerService_;
  }));

  describe('#addPlayer', function() {
    it("stores a player", function(){
      playerService.addPlayer('sity');
      expect(playerService.getPlayer()).toEqual('sity');
    });
  });

});
