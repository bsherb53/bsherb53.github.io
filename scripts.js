var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/mouse", {
            templateUrl: "mouseguard/index.html",
            controller : "mouseCtrl"
        })
        .when("/hex", {
            templateUrl: "hexmap/index.html",
            controller : "hexCtrl"
        });
});

app.controller('mainCtrl', function ($scope) {
    $scope.page = 1;
    $scope.something = "this is a test";
});
