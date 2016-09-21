describe("Playpage", function() {

  const helpers = require('./helpers');

  it("both players start with a current score of 0", function() {
    helpers.enterNameAndClick();
    const message = "Current score Sity: 0 vs. Super Sity: 0";
    expect($(".play-page__current-score").getText()).toEqual(message);
  });

  it('displays a message after each round', function(){
    helpers.enterNameAndClick();
    $('#rock').click();
    const message = $(".play-page__score");
    expect(message.getText()).toMatch((/DRAW|SCORE/));
  });

  it("finishes the game when either player gets to 3", function(){
    helpers.enterNameAndClick();
    helpers.chooseRockUntilWinner();
    const message = $(".result-page__content");
    expect(message.getText()).toMatch((/WIN/));
  });

});
