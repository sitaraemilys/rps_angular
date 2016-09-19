var app = angular.module('rockPaperScissors', ['ui.router']);
  app.config(['$stateProvider', function($stateProvider) {

  $stateProvider
  .state('home', {
      url: '/',
      templateUrl: 'js/partials/_home.html'
    })

  .state('play', {
      url: '/play',
      templateUrl: 'js/partials/_play.html'
    })

  .state('result', {
      url: '/result',
      templateUrl: 'js/partials/_result.html'
    });
}]);
