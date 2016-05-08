"use strict";
(function() {

  angular
  .module("myApp", ["ui.router"])

  .config(configFunction)

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider']
  function configFunction($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "home/home.html",
      controller: "homeCtrl"
    })
  }
})();
