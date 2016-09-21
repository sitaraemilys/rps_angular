'use strict'

class HomeController {

  constructor(){
    const self = this;
  }

  startGame(player){
    PlayerService.addPlayer(player);
    ScoreService.setPlayerScore();
    ScoreService.setComputerScore();
    $state.go('play');
  }

}

angular.module('rockPaperScissors')
       .controller('HomeController', HomeController);



// angular.module('rockPaperScissors')
//        .controller('HomeController', HomeController);
//
// HomeController.$inject = ['PlayerService', 'ScoreService', '$state'];
//
// function HomeController(PlayerService, ScoreService, $state) {
//
//   const self = this;
//   self.startGame = startGame;
//
//   function startGame(player){
//     PlayerService.addPlayer(player);
//     ScoreService.setPlayerScore();
//     ScoreService.setComputerScore();
//     $state.go('play');
//   }
//
// }
