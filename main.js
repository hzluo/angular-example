var app = angular.module("my", []);

app.controller("RootController", ["$scope", function($scope){
    $scope.title = "Hello World";

    $scope.$watch("valueCNY", function(val){
        $scope.valueUSD = val * 6 || "";
    })
}]).filter("toMoney", [function(){
    return function(val){
        return parseInt(val).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
}]);