module.exports = {

  enterNameAndClick: function () {
    browser.get('/#/');
    $('input').sendKeys('Sity');
    $('#start-game').click();
  }
};
