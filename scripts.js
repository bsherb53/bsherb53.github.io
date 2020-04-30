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
    $scope.version = "1.0.0";
    $scope.page = function (name){
        if (name == "hex"){
            $location.path( "/hex" );
        }

        if (name == "mouse"){
            $location.path( "/mouse" );
        }
    }
});
