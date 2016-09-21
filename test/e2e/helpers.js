// module.exports = {
//
//   enterNameAndClick: function () {
//     browser.get('/#/');
//     $('input').sendKeys('Sity');
//     $('#start-game').click();
//   },
//
// chooseRockUntilWinner: function() {
//   $('#rock').isPresent().then(function(result){
//     if(result){
//       $('#rock').click();
//       this.chooseRockUntilWinner();
//     }
//   });
// }
// };

var helpers = function helpers(){

    var self = this;

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


    // this.logout = function (){};
};

module.exports = new helpers();
