(function() {

  angular
    .module("myApp")
    .controller("homeCtrl", homeCtrl)

    homeCtrl.$inject = ["$scope", "$state"]

    function homeCtrl($scope, $state) {
      console.log("helo")
      let y = 3
    }

})();
