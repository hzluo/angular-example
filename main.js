var app = angular.module("my", []);

app.controller("RootController", ["$scope", function($scope){
    $scope.title = "Hello World";

    $scope.$watch("valueCNY", function(val){
        $scope.valueUSD = val * 6 || "";
    })
}]);