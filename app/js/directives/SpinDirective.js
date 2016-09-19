
angular.module('rockPaperScissors')
       .directive('animateSpin', ['$animate', function($animate){

  function spinElement(element, scope, attrs){
    element.on('click', function() {
        $animate.addClass(element, 'spin');
    });
  }

}]);
