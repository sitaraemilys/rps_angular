angular.module('rockPaperScissors')
       .service('ComputerService', ComputerService);

// ComputerService.$inject = ['PlayerService', 'ScoreService', '$state'];

function ComputerService(){

  var self = this;
  self.playMove = playMove;

  function playMove(moves) {
    var numberOfMoves = moves.length;
    self.computerMove = moves[Math.floor(Math.random() * (numberOfMoves))];
    return self.computerMove;
  }

}
