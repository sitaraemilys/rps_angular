angular.module('rockPaperScissors')
       .service('ScoreService', ScoreService);

  function ScoreService(){

    var self = this;
    self.setPlayerScore = setPlayerScore;
    self.setComputerScore = setComputerScore;
    self._computerWin = _computerWin;
    self._playerWin = _playerWin;
    self.getPlayerScore = getPlayerScore;
    self.getComputerScore = getComputerScore;
    self.calculateResult = calculateResult;
    self.isDraw = isDraw;
    self.isPlayerWin = isPlayerWin;
    self.reset = reset;

  function setPlayerScore() {
    self.playerScore = 0;
  }

  function setComputerScore() {
    self.computerScore = 0;
  }

  function getPlayerScore() {
    return self.playerScore;
  }

  function getComputerScore() {
    return self.computerScore;
  }

  function calculateResult(rules, playerMove, computerMove){
    if (isDraw(playerMove, computerMove)){
        swal('you chose ' + playerMove + '\n super sity chose ' + computerMove + '\n it\'s a draw');
      } else if (isPlayerWin(rules, playerMove, computerMove)) {
        swal('you chose ' + playerMove + '\n super sity chose ' + computerMove + '\n you win');
        self._playerWin();
      } else {
        swal('you chose ' + playerMove + '\n super sity chose ' + computerMove + '\n super sity wins');
        self._computerWin();
      }
  }


  function isDraw(playerMove, computerMove){
    return playerMove == computerMove;
  }

  function isPlayerWin(rules, playerMove, computerMove){
    return rules[playerMove] == computerMove;
  }

  function reset(){
    self.playerScore = 0;
    self.computerScore = 0;
  }

  function _playerWin() {
    self.playerScore++;
  }

  function _computerWin() {
    self.computerScore++;
  }

}
