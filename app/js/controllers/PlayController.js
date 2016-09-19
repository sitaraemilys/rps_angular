angular.module('rockPaperScissors')
       .controller('PlayController', PlayController);

PlayController.$inject = ['PlayerService', 'GameService', 'ScoreService', 'ComputerService', '$state'];

function PlayController(PlayerService, GameService, ScoreService, ComputerService, $state) {

  var self = this;
  self.play = play;
  self.resetScores = resetScores;
  self.verdict = verdict;
  self.isPlayerWin = isPlayerWin;
  self.isComputerWin = isComputerWin;
  self.player = PlayerService.getPlayer();
  self.moves = GameService.moves;
  self.rules = GameService.rules;
  self.playerScore = ScoreService.getPlayerScore();
  self.computerScore = ScoreService.getComputerScore();


  function play(playerMove) {
    self.computerMove = ComputerService.playMove(self.moves);
    self.playerMove = playerMove;
    ScoreService.calculateResult(self.rules, self.playerMove, self.computerMove);
    self.playerScore = ScoreService.getPlayerScore();
    self.computerScore = ScoreService.getComputerScore();
    self.verdict();
  }

  function resetScores() {
    ScoreService.reset();
    self.playerScore = ScoreService.getPlayerScore();
    self.computerScore = ScoreService.getComputerScore();

  }

  function verdict() {
    if (self.isPlayerWin() || self.isComputerWin()) {
      $state.go('result');
    }
  }

  function isPlayerWin() {
    return self.playerScore == 3;
  }

  function isComputerWin(){
    return self.computerScore == 3;
  }

}
