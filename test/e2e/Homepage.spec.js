describe("Homepage", function() {

  const helpers = require('./helpers');

  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Rock Paper Scissors");
  });

  it("player must fill out name in order to begin game", function(){
    helpers.enterNameAndClick();
    const message = "Current score Sity: 0 vs. Super Sity: 0";
    expect($(".play-page__current-score").getText()).toEqual(message);
  });

});
