var app = angular.module("my", []);

app.controller("RootController", ["$scope", function($scope){
    $scope.title = "Hello World";

    $scope.inputChanged = function(){
        console.log("value changed");
         $scope.valueUSD = $scope.valueCNY * 6;
    }
}])