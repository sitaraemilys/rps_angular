describe('ComputerService', function() {
  beforeEach(module('rockPaperScissors')
  );

  var ComputerService;

  beforeEach(inject(function(_ComputerService_) {
    computerService = _ComputerService_;
  }));

  describe('#playMove', function() {
    it("generates a computer move", function(){
      moves = ['rock', 'paper', 'scissors'];
      computerService.playMove(moves);
      expect(computerService.getMove()).toMatch((/^(rock|paper|scissors)$/));
    });
  });

});
