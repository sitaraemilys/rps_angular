describe('PlayerService', function() {
  beforeEach(module('rockPaperScissors')
  );

  var PlayerService;

  beforeEach(inject(function(_PlayerService_) {
    PlayerService = _PlayerService_;
  }));

  describe('#addPlayer', function() {
    it("stores a player", function(){
      PlayerService.addPlayer('sity');
      expect(PlayerService.getPlayer()).toEqual('sity');
    });
  });

});
