var app = angular.module("my", []);

app.controller("RootController", ["$scope", function($scope){
    $scope.title = "Hello World";
}])