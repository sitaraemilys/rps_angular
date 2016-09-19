angular.module('rockPaperScissors')
       .service('RandomNumberGeneratorService');

function RandomNumberGeneratorService(){

  var self = this;
  self.generateNumber = generateNumber;

  function generateNumber(numberOfMoves) {
    return Math.random() * (numberOfMoves);
  }

}
