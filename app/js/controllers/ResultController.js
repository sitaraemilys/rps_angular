angular.module('rockPaperScissors')
       .controller('ResultController', ResultController);

ResultController.$inject = ['ScoreService', '$state'];

function ResultController (ScoreService, $state) {

  const self = this;
  self.gameResult = gameResult;
  self.restart = restart;
  self.playerScore = ScoreService.getPlayerScore();
  self.computerScore = ScoreService.getComputerScore();

  function gameResult(){
    if (self.playerScore > self.computerScore) {
      return 'You win!';
    } else {
      return 'Super Sity wins!';
    }
  }

  function restart(){
    ScoreService.reset();
    $state.go('play');
  }

}
