'use strict';

/**
 * @ngdoc function
 * @name djcomAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the djcomAngularApp
 */
angular.module('djcomAngularApp')
  .controller('mainCtrl', function ($scope) {
    $scope.piedata = [
        { "id": "portfolio", "percent":33, "url": "#/portfolio" },
        { "id": "projects", "percent":33, "url": "#/projects" },
        { "id": "data", "percent":33, "url": "#/data" }
    ];
  });
