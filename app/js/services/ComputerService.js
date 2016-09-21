import angular from 'angular';

class ComputerService {

  const self = this;

  playMove(moves) {
    var numberOfMoves = moves.length;
    self.computerMove = moves[Math.floor(Math.random() * (numberOfMoves))];
  }

  getMove = () => self.computerMove;

}

//
// var getName = () => "Hetal";
//   // will be transpiled to
//   var getName = function () {
//       return "Hetal";
//   };


// angular.module('rockPaperScissors')
//        .service('ComputerService', ComputerService);
//
// function ComputerService(){
//
//   const self = this;
//   self.playMove = playMove;
//   self.getMove = getMove;
//
//   function playMove(moves) {
//     var numberOfMoves = moves.length;
//     self.computerMove = moves[Math.floor(Math.random() * (numberOfMoves))];
//   }
//
//   function getMove(){
//     return self.computerMove;
//   }
// }
