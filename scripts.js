var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/mouse", {
            templateUrl: "mouseguard/index.html",
            controller: "mouseCtrl"
        })
        .when("/hex", {
            templateUrl: "hexmap/index.html",
            controller: "hexCtrl"
        });
});

app.controller('mainCtrl', function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    

    $scope.version = "1.0.0";
    $scope.page = function (name) {
        if (name == "hex") {
            $location.path("/hex");
            return;
        }

        if (name == "mouse") {
            $location.path("/mouse");
            return;
        }

        $location.path("/");
    }
});
