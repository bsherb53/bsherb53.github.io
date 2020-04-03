var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.loading = true;
    $scope.version = "0.1.2";
    // $scope.admin = false;
    // // Your web app's Firebase configuration
    // var firebaseConfig = JSON.parse(fbcfg);

    // // Initialize Firebase
    // var app = firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
    // var db = firebase.firestore();
    // var getOptions = {};

    // // load all the data
    // var datas = db.collection("datum")

    // var useCache = true;

    // var d = new Date();
    // var n = d.getTime();

    // function compare(a, b) {
    //     // console.log(a.number,b.number);
    //     if (a.number === b.number) {
    //         return 0;
    //     }
    //     return a.number < b.number ? -1 : 1;
    // }

    // var stored = localStorage['time'];
    // if (stored == undefined) {
    //     useCache = false;
    // }


    // var expiration = 1000 * 60 * 60;// 1 hour
    // if (stored) {
    //     var myVar = JSON.parse(stored);
    //     var diff = n - myVar;
    //     console.log("checking diff", diff, "with", expiration);
    //     if (diff > expiration) {
    //         // localstorage more than 10 minutes
    //         useCache = false
    //     }
    // }

    // console.log("Using Cache: " + useCache);
    // if (useCache) {
    //     var stored = localStorage['tiles']
    //     if (stored) {
    //         var alltiles = JSON.parse(stored);
    //         alltiles = alltiles.sort(compare);
    //         // console.log("sorted tiles", alltiles)
    //         $scope.tiles = alltiles;
    //     }
    //     stored = localStorage['biomes']
    //     if (stored) {
    //         $scope.biomes = JSON.parse(stored);
    //     }
    //     stored = localStorage['owners']
    //     if (stored) {
    //         $scope.owners = JSON.parse(stored);
    //     }
    //     stored = localStorage['weathers']
    //     if (stored) {
    //         $scope.weathers = JSON.parse(stored);
    //     }
    //     stored = localStorage['types']
    //     if (stored) {
    //         $scope.types = JSON.parse(stored);
    //     }
    //     stored = localStorage['ratings']
    //     if (stored) {
    //         $scope.ratings = JSON.parse(stored);
    //     }
    // } else {
    //     console.log("Setting cache as " + n)
    //     localStorage['time'] = JSON.stringify(n);

    //     datas.doc("biomes").get(getOptions).then(function (doc) {
    //         if (doc.exists) {
    //             $scope.biomes = doc.data();
    //             console.log("Loaded Biomes");
    //             localStorage['biomes'] = JSON.stringify($scope.biomes);
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //     }).catch(function (error) {
    //         console.log($scope.biomes);
    //         console.log("Error getting document:", error);
    //     });

    //     datas.doc("owners").get(getOptions).then(function (doc) {
    //         if (doc.exists) {
    //             $scope.owners = doc.data();
    //             console.log("Loaded owners");
    //             localStorage['owners'] = JSON.stringify($scope.owners);
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //     }).catch(function (error) {
    //         console.log("Error getting document:", error);
    //     });

    //     datas.doc("ratings").get(getOptions).then(function (doc) {
    //         if (doc.exists) {
    //             $scope.ratings = doc.data();
    //             console.log("Loaded ratings");
    //             localStorage['ratings'] = JSON.stringify($scope.ratings);
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //     }).catch(function (error) {
    //         console.log("Error getting document:", error);
    //     });

    //     datas.doc("types").get(getOptions).then(function (doc) {
    //         if (doc.exists) {
    //             $scope.types = doc.data();
    //             console.log("Loaded types");
    //             localStorage['types'] = JSON.stringify($scope.types);
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //     }).catch(function (error) {
    //         console.log("Error getting document:", error);
    //     });
    //     datas.doc("weathers").get(getOptions).then(function (doc) {
    //         if (doc.exists) {
    //             $scope.weathers = doc.data();
    //             console.log("Loaded weathers");
    //             localStorage['weathers'] = JSON.stringify($scope.weathers);
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //     }).catch(function (error) {
    //         console.log("Error getting document:", error);
    //     });
    //     $scope.tiles = [];
    //     var tiles = db.collection("tiles")
    //     var alltiles = [];
    //     db.collection("tiles").get(getOptions).then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             tile = doc.data();
    //             tile.id = doc.id;

    //             switch (tile.owner.name) {
    //                 case $scope.owners[0].name:
    //                     tile.owner = $scope.owners[0];
    //                     break;
    //                 case $scope.owners[1].name:
    //                     tile.owner = $scope.owners[1];
    //                     break;
    //                 case $scope.owners[2].name:
    //                     tile.owner = $scope.owners[2];
    //                     break;
    //                 case $scope.owners[3].name:
    //                     tile.owner = $scope.owners[3];
    //                     break;
    //                 case $scope.owners[5].name:
    //                     tile.owner = $scope.owners[5];
    //                     break;
    //                 case $scope.owners[6].name:
    //                     tile.owner = $scope.owners[6];
    //                     break;
    //                 case $scope.owners[7].name:
    //                     tile.owner = $scope.owners[7];
    //                     break;
    //                 case $scope.owners[8].name:
    //                     tile.owner = $scope.owners[8];
    //                     break;
    //                 case $scope.owners[8].name:
    //                     tile.owner = $scope.owners[9];
    //                     break;
    //                 case $scope.owners[10].name:
    //                     tile.owner = $scope.owners[10];
    //                     break;
    //                 default:
    //                     tile.owner = $scope.owners[0];

    //             }

    //             alltiles.push(tile);
    //         });
    //         alltiles.sort(compare);
    //         $scope.tiles = alltiles;
    //         console.log("loaded tiles");
    //         localStorage['tiles'] = JSON.stringify($scope.tiles);
    //         // $scope.tiles.forEach(function (item, index) {
    //         //     if (item.owner == "0") {
    //         //         var batch = db.batch();
    //         //         var sfRef = db.collection("tiles").doc(item.id);
    //         //         batch.update(sfRef, {
    //         //             number: item.number,
    //         //             name: item.name,
    //         //             biome: item.biome,
    //         //             type: item.type,
    //         //             weather: item.weather,
    //         //             rating: item.rating,
    //         //             owner: $scope.owners[0]
    //         //         });
    //         //         // Commit the batch
    //         //         batch.commit().then(function () {
    //         //             // ...
    //         //             console.log("batch complete");
    //         //         });
    //         //     }
    //         // })

    //     });
    // }


    // $scope.selected = undefined;
    // $scope.select = function (n) {
    //     $scope.old = JSON.parse(JSON.stringify($scope.tiles[n]));
    //     console.log("selected ", n, $scope.tiles[n])
    //     if ($scope.selected != undefined) {
    //         save($scope.selected)
    //     }
    //     $scope.selected = $scope.tiles[n];
    // };

    // $scope.close = function () {
    //     save($scope.selected)
    //     $scope.selected = undefined;
    // };

    // var save = function (t) {

    //     var old = $scope.old;
    //     // console.log("old", old)
    //     // console.log("new", t)
    //     var different = old.number != t.number || old.name != t.name ||
    //         old.biome != t.biome || old.type != t.type ||
    //         old.weather != t.weather || old.rating != t.rating ||
    //         old.owner.name != t.owner.name;
    //     if (!different) {
    //         // console.log("items not different");
    //         return
    //     }


    //     console.log("saving");

    //     if (t.id == undefined) {
    //         console.log("undefined id", t);
    //         return;
    //     }
    //     // var temp = $scope.tiles;
    //     $scope.tiles[t.number] = t;
    //     // $scope.tiles = temp;
    //     // save to cache too: 
    //     localStorage['tiles'] = JSON.stringify($scope.tiles);

    //     // Get a new write batch
    //     var batch = db.batch();

    //     // Update the population of 'SF'
    //     var sfRef = db.collection("tiles").doc(t.id);
    //     batch.update(sfRef, {
    //         number: t.number,
    //         name: t.name,
    //         biome: t.biome,
    //         type: t.type,
    //         weather: t.weather,
    //         rating: t.rating,
    //         owner: t.owner
    //     });

    //     // Commit the batch
    //     batch.commit().then(function () {
    //         // ...
    //         console.log("saved", t);
    //         // console.log("batch complete");
    //     });

    // }
    $scope.loading = false;
    // // console.log($scope.tiles)
    // if ($scope.tiles == undefined || $scope.tiles.length == 0) {
    //     $scope.tiles = JSON.parse(data);
    // }



    // // load all new tiles with blank data
    // // for (var i = 0; i < 1520; i++) {
    // //     var newTile = {
    // //         number: i,
    // //         name: "",
    // //         biome: "0",
    // //         type: "0",
    // //         weather: "0",
    // //         rating: "0",
    // //         owner: "0"
    // //     }

    // //     db.collection("tiles").add(newTile)
    // //         .then(function (docRef) {
    // //             console.log("Document written with ID: ", docRef.id);
    // //         })
    // //         .catch(function (error) {
    // //             console.error("Error adding document: ", error);
    // //         });
    // // }

    // $scope.clearCache = function () {
    //     console.log("clearing cache");
    //     localStorage.clear();
    // }

    var CLIENT_ID = '299441892540-kahbci33qig5lde0ul4l20uvpmgo349k';
    var API_KEY = 'AIzaSyC8fZMlxqKFkt5Wu0sLZUhzXFhuUfa0ZpQ';
    var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
    var authorizeButton = document.getElementById('authorize_button');
    var signoutButton = document.getElementById('signout_button');

    $scope.$on('$viewContentLoaded', handleClientLoad);
    function handleClientLoad() {
        gapi.load('client:auth2', initClient);
    }
    $scope.handleClientLoad = handleClientLoad
    function initClient() {
        gapi.client.init({
            apiKey: API_KEY,
            // clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS
            // scope: SCOPES
        }).then(function () {
            listMajors();
        }, function (error) {
            console.log(JSON.stringify(error, null, 2));
        });
    }


    function listMajors() {
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1B16F1-Dd4lGoAMhGfGTCRUl4FFQg9hBPsxYBXEJp9zI',
            range: 'MapData!A2:G1521',
        }).then(function (response) {
            var range = response.result;
            if (range.values.length > 0) {
                console.log('Tile,	Biome,	Owner,	Color,	CR,	Type');
                for (i = 0; i < range.values.length; i++) {
                    var row = range.values[i];
                    // Print columns A and E, which correspond to indices 0 and 4.


                    //   0: "Tile"
                    //   2: "Biome"
                    //   2: "Owner"
                    //   3: "Color"
                    //   4: "CR"
                    //   5: "Type"

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
                    //   appendPre(row[0] + ', ' + row[1]+ ', ' + row[2]+ ', ' + row[3]+ ', ' + row[4]+ ', ' + row[5]);
                }
            } else {
                console.log('No data found.');
            }
        }, function (response) {
            console.log('Error: ' + response.result.error.message);
        });
    }

    // handleClientLoad();
});

