describe("Playpage", function() {

  var helpers = require('./helpers');

  it("both players start with a current score of 0", function() {
    helpers.enterNameAndClick();
    expect($$("p").first().getText()).toEqual("Current score Sity: 0 vs. Super Sity: 0");
  });

  xit("displays a draw", function(){
    helpers.enterNameAndClick();
    var playerMove = $('#rock').click();
    // how do i mock the computer move?
    var computerMove = "rock";
    // how do i test the content of an alert? this keeps saying the wait timed out...
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);
   var alertDialog = browser.switchTo().alert();
   expect(alertDialog.getText()).toEqual("you chose rock super sity chose rock - draw");
   });

  it("displays a player win", function(){

  });

  it("displays a computer win", function(){

  });

  it("can restart the game", function(){

  });

  it("finishes the game when either player gets to 3", function(){

  });

});
