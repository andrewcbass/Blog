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
    .state("home.festivalGo", {
      url:"",
      templateUrl: "home/projects/festivalGo.html",
      controller: "homeCtrl"
    })
    .state("home.paceMe", {
      url: "paceMe",
      templateUrl: "home/projects/paceMe.html",
      controller: "homeCtrl"
    })
    .state("home.stars", {
      url: "stars",
      templateUrl: "home/projects/stars.html",
      contoller: "starCtrl"
    })
  }
})();
