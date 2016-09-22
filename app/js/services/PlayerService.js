angular.module('rockPaperScissors')
       .service('PlayerService', PlayerService);

  function PlayerService(){

    const self = this;
    self.addPlayer = addPlayer;
    self.getPlayer = getPlayer;

  function addPlayer(player) {
    self.player = player;
  }

  function getPlayer() {
    return self.player;
  }

}
