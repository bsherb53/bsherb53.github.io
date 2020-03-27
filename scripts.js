var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.loading = true;
    $scope.version = "0.0.3";
    // Your web app's Firebase configuration
    var firebaseConfig = JSON.parse(fbcfg);

    // Initialize Firebase
    var app = firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.firestore();
    var getOptions = {};

    // load all the data
    var datas = db.collection("datum")

    var useCache = true;

    var d = new Date();
    var n = d.getTime();

    function compare(a, b) {
        // console.log(a.number,b.number);
        if (a.number === b.number) {
            return 0;
        }
        return a.number < b.number ? -1 : 1;
    }

    var stored = localStorage['time'];
    var expiration = 1000 * 60 * 10;// 10 minutes?
    if (stored) {
        var myVar = JSON.parse(stored);
        var diff = n - myVar;
        console.log("checking diff", diff, "with", expiration);
        if (diff > expiration) {
            // localstorage more than 10 minutes
            useCache = false
        }
    }

    console.log("Using Cache: " + useCache);
    if (useCache) {
        var stored = localStorage['tiles']
        if (stored) {
            var alltiles = JSON.parse(stored);
            alltiles = alltiles.sort(compare);
            // console.log("sorted tiles", alltiles)
            $scope.tiles = alltiles;
        }
        stored = localStorage['biomes']
        if (stored) {
            $scope.biomes = JSON.parse(stored);
        }
        stored = localStorage['owners']
        if (stored) {
            $scope.owners = JSON.parse(stored);
        }
        stored = localStorage['weathers']
        if (stored) {
            $scope.weathers = JSON.parse(stored);
        }
        stored = localStorage['types']
        if (stored) {
            $scope.types = JSON.parse(stored);
        }
        stored = localStorage['ratings']
        if (stored) {
            $scope.ratings = JSON.parse(stored);
        }
    } else {
        console.log("Setting cache as " + n)
        localStorage['time'] = JSON.stringify(n);

        datas.doc("biomes").get(getOptions).then(function (doc) {
            if (doc.exists) {
                $scope.biomes = doc.data();
                console.log("Loaded Biomes");
                localStorage['biomes'] = JSON.stringify($scope.biomes);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log($scope.biomes);
            console.log("Error getting document:", error);
        });

        datas.doc("owners").get(getOptions).then(function (doc) {
            if (doc.exists) {
                $scope.owners = doc.data();
                console.log("Loaded owners");
                localStorage['owners'] = JSON.stringify($scope.owners);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        datas.doc("ratings").get(getOptions).then(function (doc) {
            if (doc.exists) {
                $scope.ratings = doc.data();
                console.log("Loaded ratings");
                localStorage['ratings'] = JSON.stringify($scope.ratings);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        datas.doc("types").get(getOptions).then(function (doc) {
            if (doc.exists) {
                $scope.types = doc.data();
                console.log("Loaded types");
                localStorage['types'] = JSON.stringify($scope.types);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
        datas.doc("weathers").get(getOptions).then(function (doc) {
            if (doc.exists) {
                $scope.weathers = doc.data();
                console.log("Loaded weathers");
                localStorage['weathers'] = JSON.stringify($scope.weathers);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
        $scope.tiles = [];
        var tiles = db.collection("tiles")
        var alltiles = [];
        db.collection("tiles").get(getOptions).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                tile = doc.data();
                tile.id = doc.id;
                alltiles.push(tile);
            });
            alltiles.sort(compare);
            $scope.tiles = alltiles;
            console.log("loaded tiles");
            localStorage['tiles'] = JSON.stringify($scope.tiles);
        });
    }


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

        var old = $scope.old;
        // console.log("old", old)
        // console.log("new", t)
        var different = old.number != t.number || old.name != t.name ||
            old.biome != t.biome || old.type != t.type ||
            old.weather != t.weather || old.rating != t.rating ||
            old.owner != t.owner;
        if (!different) {
            // console.log("items not different");
            return
        }


        console.log("saving", t);
        var temp = $scope.tiles;
        temp[t.number - 1] = t;
        $scope.tiles = temp;
        // save to cache too: 
        localStorage['tiles'] = JSON.stringify($scope.tiles);

        // Get a new write batch
        var batch = db.batch();

        // Update the population of 'SF'
        var sfRef = db.collection("tiles").doc(t.id);
        batch.update(sfRef, {
            number: t.number,
            name: t.name,
            biome: t.biome,
            type: t.type,
            weather: t.weather,
            rating: t.rating,
            owner: t.owner
        });

        // Commit the batch
        batch.commit().then(function () {
            // ...
            // console.log("batch complete");
        });

    }
    $scope.loading = false;
    // console.log($scope.tiles)
    if ($scope.tiles == undefined || $scope.tiles.length == 0) {
        $scope.tiles = JSON.parse(data);
    }



    // $scope.tiles.forEach(myFunction);

    // function myFunction(item, index) {
    //     var newTile = {
    //         number: item.number,
    //         name: "",
    //         biome: 0,
    //         type: 0,
    //         weather: 0,
    //         rating: 0,
    //         owner: 0
    //     }
    //     console.log(newTile);

    //     db.collection("tiles").add(newTile)
    //         .then(function(docRef) {
    //             console.log("Document written with ID: ", docRef.id);
    //         })
    //         .catch(function(error) {
    //             console.error("Error adding document: ", error);
    //         });
    // }
});