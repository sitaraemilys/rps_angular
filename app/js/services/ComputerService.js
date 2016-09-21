angular.module('rockPaperScissors')
       .service('ComputerService', ComputerService);

function ComputerService(){

  var self = this;
  self.playMove = playMove;
  self.getMove = getMove;

  function playMove(moves) {
    var numberOfMoves = moves.length;
    self.computerMove = moves[Math.floor(Math.random() * (numberOfMoves))];
  }

  function getMove(){
    return self.computerMove;
  }
}
