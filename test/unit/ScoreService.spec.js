describe('ScoreService', function() {
  beforeEach(module('rockPaperScissors')
  );

  const ScoreService;
  const rules;

  beforeEach(inject(function(_ScoreService_) {
    ScoreService = _ScoreService_;
  }));

  describe('#setPlayerScore', function() {
    it("sets the player's score to 0", function(){
      ScoreService.setPlayerScore();
      expect(ScoreService.getPlayerScore()).toEqual(0);
    });
  });

  describe('#setComputerScore', function() {
    it("sets the computer's score to 0", function(){
      ScoreService.setComputerScore();
      expect(ScoreService.getComputerScore()).toEqual(0);
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
      expect(ScoreService.calculateResult(rules, playerMove, computerMove)).toEqual(message);
    });

    it('returns a player win', function(){
      playerMove = 'paper';
      computerMove = 'rock';
      message = 'YOU SCORE';
      expect(ScoreService.calculateResult(rules, playerMove, computerMove)).toEqual(message);
    });

    it('returns a computer win', function(){
      playerMove = 'paper';
      computerMove = 'scissors';
      message = 'SUPER SITY SCORES';
      expect(ScoreService.calculateResult(rules, playerMove, computerMove)).toEqual(message);
    });
  });



});
