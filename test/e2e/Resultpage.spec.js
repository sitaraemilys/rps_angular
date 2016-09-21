describe("Resultpage", function() {

  const helpers = require('./helpers');

  it("can restart the game", function(){
    helpers.enterNameAndClick();
    helpers.chooseRockUntilWinner();
    $(".button--restart--result").click();
    const message = "Current score Sity: 0 vs. Super Sity: 0";
    expect($(".play-page__current-score").getText()).toEqual(message);
  });

});
