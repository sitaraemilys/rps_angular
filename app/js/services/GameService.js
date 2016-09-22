angular.module('rockPaperScissors')
       .service('GameService', GameService);

function GameService(){

  const self = this;
  self.rules = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'};
  self.moves = ['rock', 'paper', 'scissors'];
}
