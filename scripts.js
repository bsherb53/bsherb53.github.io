var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.loading = true;
    $scope.version = "0.1.4";

    $scope.selected = undefined;
    $scope.select = function (n) {
        $scope.old = JSON.parse(JSON.stringify($scope.tiles[n]));
        console.log("selected ", n, $scope.tiles[n])
        if ($scope.selected != undefined) {
            save($scope.selected)
        }
        $scope.selected = $scope.tiles[n];
    };

    $scope.close = function () {
        save($scope.selected)
        $scope.selected = undefined;
    };

    var save = function (t) {
        console.log("implement saving ", t, $scope.old)
        // var old = $scope.old;
        // // console.log("old", old)
        // // console.log("new", t)
        // var different = old.number != t.number || old.name != t.name ||
        //     old.biome != t.biome || old.type != t.type ||
        //     old.weather != t.weather || old.rating != t.rating ||
        //     old.owner.name != t.owner.name;
        // if (!different) {
        //     // console.log("items not different");
        //     return
        // }


        // console.log("saving");

        // if (t.id == undefined) {
        //     console.log("undefined id", t);
        //     return;
        // }
        // // var temp = $scope.tiles;
        // $scope.tiles[t.number] = t;
        // // $scope.tiles = temp;
        // // save to cache too: 
        // localStorage['tiles'] = JSON.stringify($scope.tiles);

        // // Get a new write batch
        // var batch = db.batch();

        // // Update the population of 'SF'
        // var sfRef = db.collection("tiles").doc(t.id);
        // batch.update(sfRef, {
        //     number: t.number,
        //     name: t.name,
        //     biome: t.biome,
        //     type: t.type,
        //     weather: t.weather,
        //     rating: t.rating,
        //     owner: t.owner
        // });

        // // Commit the batch
        // batch.commit().then(function () {
        //     // ...
        //     console.log("saved", t);
        //     // console.log("batch complete");
        // });

    }
    var API_KEY = 'AIzaSyC8fZMlxqKFkt5Wu0sLZUhzXFhuUfa0ZpQ';
    var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

    var CLIENT_ID = '299441892540-kahbci33qig5lde0ul4l20uvpmgo349k';
    var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

    $scope.FunCall = function () {
        gapi.load('client:auth2', initClient);
    }
    function initClient() {
        gapi.client.init({
            apiKey: API_KEY,
            // clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS
            // scope: SCOPES
        }).then(function () {
            LoadTiles();
        }, function (error) {
            console.log(JSON.stringify(error, null, 2));
        });
    }
    function LoadTiles() {
        $scope.tiles = [];
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1B16F1-Dd4lGoAMhGfGTCRUl4FFQg9hBPsxYBXEJp9zI',
            range: 'MapData!A:J',
        }).then(function (response) {
            var range = response.result;
            if (range.values.length > 0) {
                console.log('Loading Data');
                for (i = 1; i < range.values.length; i++) { // i = 1 to ignore the header row
                    var row = range.values[i];
                    var tile = {
                        number: row[0],
                        name: row[1],
                        biome: row[2],
                        owner: row[3],
                        color: row[4],
                        rating: row[5],
                        type: row[6],
                        weather: row[7],
                    }

                    $scope.tiles.push(tile);
                }
                console.log($scope.tiles);
                $scope.loading = false;
            } else {
                console.log('No data found.');
            }
        }, function (response) {
            console.log('Error: ' + response.result.error.message);
        });
    }

    // handleClientLoad();
});

