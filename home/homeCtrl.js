(function() {

  angular
    .module("myApp")
    .controller("homeCtrl", homeCtrl)

    homeCtrl.$inject = ["$scope", "$state"]

    function homeCtrl($scope, $state) {
      $scope.scroll = function(navTo) {
        var scrollTo = document.getElementById(navTo)
        zenscroll.to(scrollTo)
      }

      
    }
})();
