describe("Playpage", function() {

  var helpers = require('./helpers');
  var ComputerService;

  beforeEach(function(){
    ComputerService = jasmine.createSpyObj('ComputerService', ['playMove']);
  });

  it("both players start with a current score of 0", function() {
    helpers.enterNameAndClick();
    expect($(".play-page__current-score").getText()).toEqual("Current score Sity: 0 vs. Super Sity: 0");
  });

  it("displays a draw", function(){
    helpers.enterNameAndClick();
    ComputerService.playMove.and.callFake(function(){
      return 'rock';
    });
    $('#rock').click();
    expect($(".play-page__score").getText()).toEqual('DRAW');
   });

  it("displays a player win", function(){
    helpers.enterNameAndClick();
    spyOn(ComputerService, 'playMoves').and.returnValue('paper');
    var playerMove = $('#rock').click();
    expect($(".play-page__score").getText()).toEqual('YOU SCORE');
  });

  it("displays a computer win", function(){
    helpers.enterNameAndClick();
    spyOn(ComputerService, 'playMoves').and.returnValue('scissors');
    var playerMove = $('#rock').click();
    expect($(".play-page__score").getText()).toEqual('SUPER SITY SCORES');
  });

  xit("can restart the game", function(){
    helpers.enterNameAndClick();
    //someone scores
    $('button button--restart').click();
    expect($(".play-page__current-score").getText()).toEqual("Current score Sity: 0 vs. Super Sity: 0");
  });

  xit("finishes the game when either player gets to 3", function(){

  });

});
