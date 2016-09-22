const helpers = function helpers(){

    const self = this;

    self.enterNameAndClick = function(){
      browser.get('/#/');
      $('input').sendKeys('Sity');
      $('#start-game').click();
    };

    self.chooseRockUntilWinner = function() {
      $('#rock').isPresent().then(function(result){
        if(result){
          $('#rock').click();
          self.chooseRockUntilWinner();
        }
      });
    };
};

module.exports = new helpers();
