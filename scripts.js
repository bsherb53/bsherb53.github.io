var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    var t = [];
    var i;
    var numTiles = 1580;
    for (i = 0; i < numTiles; i++) {
        t.push({
            number: i,
            biome: "Forest",
            src: "grass.jpg",
            type: "asdf",
            weather: "weather",
            rating: 0,
            name: "Zone " + i,
            owner: "Ginger"
        });
    };
    $scope.tiles = t;

    $scope.selected = undefined;
    $scope.select = function(n) {
        $scope.selected = t[n];
    };

    $scope.close = function() {
        $scope.selected = undefined;
    };

});