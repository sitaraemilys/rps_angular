angular.module('rockPaperScissors')
       .controller('PlayController', PlayController);

PlayController.$inject = ['PlayerService', 'GameService', 'ScoreService', 'ComputerService', '$state'];

function PlayController(PlayerService, GameService, ScoreService, ComputerService, $state) {

  var self = this;
  self.play = play;
  self.resetScores = resetScores;
  self._verdict = _verdict;
  self._isPlayerWin = _isPlayerWin;
  self._isComputerWin = _isComputerWin;
  self._computerPlay = _computerPlay;
  self.player = PlayerService.getPlayer();
  self.moves = GameService.moves;
  self.rules = GameService.rules;
  self.playerScore = ScoreService.getPlayerScore();
  self.computerScore = ScoreService.getComputerScore();


  function play(playerMove) {
    self._computerPlay();
    self.playerMove = playerMove;
    self.score = ScoreService.calculateResult(self.rules, self.playerMove, self.computerMove);
    self.playerScore = ScoreService.getPlayerScore();
    self.computerScore = ScoreService.getComputerScore();
    self._verdict();
  }

  function resetScores() {
    ScoreService.reset();
    self.playerScore = ScoreService.getPlayerScore();
    self.computerScore = ScoreService.getComputerScore();

  }

  function _verdict() {
    if (self._isPlayerWin() || self._isComputerWin()) {
      $state.go('result');
    }
  }

  function _isPlayerWin() {
    return self.playerScore == 3;
  }

  function _isComputerWin(){
    return self.computerScore == 3;
  }

  function _computerPlay(){
    ComputerService.playMove(self.moves);
    self.computerMove = ComputerService.getMove();
  }

}
