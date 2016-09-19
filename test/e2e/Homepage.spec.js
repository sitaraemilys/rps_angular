describe("Homepage", function() {

  var helpers = require('./helpers');

  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Rock Paper Scissors");
  });

  it("player must fill out name in order to begin game", function(){
    helpers.enterNameAndClick();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "/#/play");
  });

});
