describe('GameService', function() {
  beforeEach(module('rockPaperScissors')
  );

  var GameService;

  beforeEach(inject(function(_GameService_) {
    GameService = _GameService_;
  }));

  describe('#rules', function() {
    it("stores the rules of the game", function(){
      expect(GameService.rules).toEqual({'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'});
    });
  });

  describe('#moves', function() {
    it("stores the moves of the game", function(){
      expect(GameService.moves).toEqual(['rock', 'paper', 'scissors']);
    });
  });

});
