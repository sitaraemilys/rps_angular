describe('ScoreService', function() {
  beforeEach(module('rockPaperScissors')
  );

  var ScoreService;
  var rules;

  beforeEach(inject(function(_ScoreService_) {
    scoreService = _ScoreService_;
  }));

  describe('#setPlayerScore', function() {
    it("sets the player's score to 0", function(){
      scoreService.setPlayerScore();
      expect(scoreService.getPlayerScore()).toEqual(0);
    });
  });

  describe('#setComputerScore', function() {
    it("sets the computer's score to 0", function(){
      scoreService.setComputerScore();
      expect(scoreService.getComputerScore()).toEqual(0);
    });
  });

  describe('#calculateResult', function(){

    beforeEach(function(){
      rules = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'};
    });

    it('returns a draw', function(){
      playerMove = 'rock';
      computerMove = 'rock';
      message = 'DRAW';
      expect(scoreService.calculateResult(rules, playerMove, computerMove)).toEqual(message);
    });

    it('returns a player win', function(){
      playerMove = 'paper';
      computerMove = 'rock';
      message = 'YOU SCORE';
      expect(scoreService.calculateResult(rules, playerMove, computerMove)).toEqual(message);
    });

    it('returns a computer win', function(){
      playerMove = 'paper';
      computerMove = 'scissors';
      message = 'SUPER SITY SCORES';
      expect(scoreService.calculateResult(rules, playerMove, computerMove)).toEqual(message);
    });
  });



});
