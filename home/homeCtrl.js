(function() {

  angular
    .module("myApp")
    .controller("homeCtrl", homeCtrl)

    homeCtrl.$inject = ["$scope", "$state"]

    function homeCtrl($scope, $state) {
      //define offset for footer in zenscroll, in px
      let edgeOffset = 60
      zenscroll.setup(999, edgeOffset)
      $scope.scroll = function(navTo) {
        var scrollTo = document.getElementById(navTo)
        zenscroll.to(scrollTo)
      }
    }
})();
