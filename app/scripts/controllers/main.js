'use strict';

/**
 * @ngdoc function
 * @name cityVitalityAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cityVitalityAngularApp
 */
angular.module('cityVitalityAngularApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.msg = "Hello, World!";

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
