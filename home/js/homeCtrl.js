(function() {

  angular
    .module("myApp")
    .controller("homeCtrl", homeCtrl)

    homeCtrl.$inject = ["$scope", "$state"]

    function homeCtrl($scope, $state) {

      $scope.on('$stateChangeSuccess', function() {
        $scope.page = $state.current.url
      })

      //zenscroll
      $scope.scroll = function(navTo) {
        var scrollTo = document.getElementById(navTo)
        zenscroll.to(scrollTo)
      }


    }
})();
