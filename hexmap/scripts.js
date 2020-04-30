app.controller('hexCtrl', function ($scope) {
    $scope.loading = true;
    $scope.version = "2.0.2";
    $scope.admin = false;
    $scope.selected = undefined;
    $scope.biomes = [];
    $scope.weathers = [];
    $scope.ratings = [];
    $scope.types = [];
    $scope.owners = [];
    $scope.loadedAdminData = false;

    var mapSpreadsheetID = '1B16F1-Dd4lGoAMhGfGTCRUl4FFQg9hBPsxYBXEJp9zI';
    $scope.select = function (n) {
        if ($scope.saving) {
            return;
        }

        if ($scope.selected != undefined) {
            save($scope.selected)
        }

        var temp = $scope.tiles[n];
        if ($scope.admin) {
            $scope.tiles[n].owner = findOwner(temp);
        }
        $scope.old = JSON.parse(JSON.stringify($scope.tiles[n]));
        console.log("selected ", n, $scope.tiles[n])

        $scope.selected = $scope.tiles[n];
    };

    $scope.close = function () {
        save($scope.selected)
    };

    var findOwner = function (tile) {
        for (i = 0; i < $scope.owners.length; i++) {
            var tempOwner = $scope.owners[i];
            if (tile.owner == tempOwner.name) {
                return $scope.owners[i];
            }
        }
    }

    var API_KEY = 'AIzaSyC8fZMlxqKFkt5Wu0sLZUhzXFhuUfa0ZpQ';
    var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

    var CLIENT_ID = '299441892540-kahbci33qig5lde0ul4l20uvpmgo349k';
    var SCOPES = 'https://www.googleapis.com/auth/spreadsheets';


    var init = async function () {
        while (gapi == undefined) { }
        gapi.load('client:auth2', initClient);
    }
    init();

    function initClient() {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(function () {
            LoadTiles();
            LoadAdminInfo();
        }, function (error) {
            console.log(JSON.stringify(error, null, 2));
        });
    };

    function LoadAdminInfo() {
        if ($scope.admin && $scope.loadedAdminData != true) {
            console.log("getting extra data")
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: '1B16F1-Dd4lGoAMhGfGTCRUl4FFQg9hBPsxYBXEJp9zI',
                range: 'Data!A2:D50',
            }).then(function (response) {
                var range = response.result;
                if (range.values.length > 0) {
                    for (i = 0; i < range.values.length; i++) {
                        var row = range.values[i];
                        if (row[0] != "" && row[0] != undefined) {
                            $scope.biomes.push(row[0]);
                        }
                        if (row[1] != "" && row[1] != undefined) {
                            $scope.weathers.push(row[1]);
                        }
                        if (row[2] != "" && row[2] != undefined) {
                            $scope.ratings.push(row[2]);
                        }
                        if (row[3] != "" && row[3] != undefined) {
                            $scope.types.push(row[3]);
                        }

                    }
                } else {
                    console.log('No data found.');
                }
            }, function (response) {
                console.log('Error: ' + response.result.error.message);
            });

            console.log("loading owners")
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: '1B16F1-Dd4lGoAMhGfGTCRUl4FFQg9hBPsxYBXEJp9zI',
                range: 'Owners!A2:G11',
            }).then(function (response) {
                var range = response.result;
                if (range.values.length > 0) {
                    for (i = 0; i < range.values.length; i++) {
                        var row = range.values[i];
                        // Name	AI	Discord	ID	Hex Color	Example	Alpha
                        var o = {
                            name: row[1],
                            color: row[4] + row[6],
                            id: row[3]
                        }
                        $scope.owners.push(o);
                    }
                    console.log($scope.owners);
                    $scope.loadedAdminData = true;
                    $scope.$apply()
                } else {
                    console.log('No data found.');
                }
            }, function (response) {
                console.log('Error: ' + response.result.error.message);
            });
        }
    };

    function LoadTiles() {
        $scope.tiles = [];
        console.log("loading tiles");
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: mapSpreadsheetID,
            range: 'MapData!A:J',
        }).then(function (response) {
            var range = response.result;
            if (range.values.length > 0) {
                for (i = 1; i < range.values.length; i++) { // i = 1 to ignore the header row
                    var row = range.values[i];
                    var tile = {
                        number: row[0],
                        name: row[1],
                        biome: row[2],
                        owner: row[3],
                        rating: row[4],
                        type: row[5],
                        weather: row[6],
                        color: row[7],
                        row: i + 1,
                    }

                    $scope.tiles.push(tile);
                }
                $scope.loading = false;
                $scope.$apply();
            } else {
                console.log('No data found.');
            }
        }, function (response) {
            console.log('Error: ' + response.result.error.message);
        });

    }

    $scope.updateSignInStatus = function (isSignedIn) {
        if (isSignedIn) {
            $scope.admin = true;
        } else {
            $scope.admin = false;
        }
    }

    $scope.handleSignInClick = function (event) {
        if ($scope.selected != undefined) {
            save($scope.selected)
        }
        var person = prompt("Please enter your passcode:", "passcode");
        if (person == null || person != "4785") {
            return;
        }
        gapi.auth2.getAuthInstance().signIn().then(function (response) {
            $scope.admin = true;
            LoadAdminInfo();
        });
    }

    $scope.handleSignOutClick = function (event) {
        $scope.admin = false;
        $scope.selected = undefined;
        gapi.auth2.getAuthInstance().signOut();
    }

    var save = function (t) {
        if (!$scope.admin) {
            $scope.selected = undefined;
            $scope.saving = false;
            return;
        }

        var old = $scope.old;
        console.log("old", old)
        console.log("new", t)

        var different = old.number != t.number || old.name != t.name ||
            old.biome != t.biome || old.type != t.type ||
            old.weather != t.weather || old.rating != t.rating ||
            old.owner != t.owner;
        if (!different) {
            $scope.selected = undefined;
            console.log("items not different");
            $scope.saving = false;
            return
        }
        console.log("saving");
        $scope.saving = true;
        var newT = {
            number: t.number,
            name: t.name,
            biome: t.biome,
            owner: t.owner.name,
            color: t.owner.color,
            rating: t.rating,
            type: t.type,
            weather: t.weather,
        }
        $scope.tiles[old.number] = newT;
        gapi.client.sheets.spreadsheets.values.update({
            "spreadsheetId": mapSpreadsheetID,
            "range": 'MapData!A' + old.row + ':I' + old.row,
            "includeValuesInResponse": 'false',
            "valueInputOption": 'RAW',
            "resource": {
                "values": [[t.number, t.name, t.biome, t.owner.name, t.rating, t.type, t.weather]]
            }
        }).then(function (response) {
            $scope.selected = undefined;
            $scope.$broadcast('$$rebind:tiles');
            $scope.saving = false;
        }, function (reason) {
            console.error('error: ' + reason.result.error.message);
            console.log(reason);
            $scope.selected = undefined;
            $scope.saving = false;
        });
    }
});



app.controller('listCtrl', function ($scope, $element) {
    $element.on('scroll', function (e) {
        $scope.visibleList = getVisibleElements(e);

        $scope.$broadcast('suspend');
        $scope.$digest();
        $scope.$broadcast('resume');
    });
});

app.directive('faSuspendable', function () {
    return {
        link: function (scope) {
            // Heads up: this might break is suspend/resume called out of order
            // or if watchers are added while suspended
            var watchers;

            scope.$on('suspend', function () {
                watchers = scope.$$watchers;
                scope.$$watchers = [];
            });

            scope.$on('resume', function () {
                if (watchers)
                    scope.$$watchers = watchers;

                // discard our copy of the watchers
                watchers = void 0;
            });
        }
    };
});