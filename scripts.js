var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    var t = [];
    var i;
    var numTiles = 1000;
    for (i = 0; i < numTiles; i++) {
        t.push({
            number: i,
            biome: "forest",
            src: "https://i.pinimg.com/originals/0b/61/12/0b611238fe328faa6ba30e89aab39e32.jpg",
            type: "asdf",
            weather: "weather",
            rating: 0,
            name: "my first zone"
        });
    };
    $scope.tiles = t;

$scope.selected = undefined;
    $scope.select = function(n) {
        $scope.selected = t[n];
    };

});