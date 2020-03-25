var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.loading = true;

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDoOudFLvfOtqrccpqJHwv1_SNnuU836NI",
        authDomain: "divine-monarchs.firebaseapp.com",
        databaseURL: "https://divine-monarchs.firebaseio.com",
        projectId: "divine-monarchs",
        storageBucket: "divine-monarchs.appspot.com",
        messagingSenderId: "61899700098",
        appId: "1:61899700098:web:511d7e8876b07c2b93c19b",
        measurementId: "G-JKY4TH6D49"
    };
    // Initialize Firebase
    var app = firebase.initializeApp(firebaseConfig);
    // console.log(app);
    firebase.analytics();
    var db = firebase.firestore();
    // console.log(db);
    var getOptions = {};

    // load all the data
    var datas = db.collection("datum")



    var useCache = true;


    var d = new Date();
    var n = d.getTime();


    var stored = localStorage['time'];

    if (stored) {
        var myVar = JSON.parse(stored);
                    console.log(myVar)

        if (n - myVar > (1000 * 60 *10 )) {
            // localstorage more than 10 minutes
            useCache = false
        }
    }

    console.log("Using Cache: " + useCache);
    if (useCache) {
        var stored = localStorage['tiles']
        if (stored) {
            $scope.tiles = JSON.parse(stored);
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
        datas.doc("biomes").get(getOptions).then(function(doc) {
            if (doc.exists) {
                $scope.biomes = doc.data();
                console.log("Loaded Biomes:", $scope.biomes);
                // console.log($scope.biomes[1])
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log($scope.biomes);
            console.log("Error getting document:", error);
        });

        datas.doc("owners").get(getOptions).then(function(doc) {
            if (doc.exists) {
                $scope.owners = doc.data();
                console.log("Loaded owners:", $scope.owners);
                // console.log($scope.owners[1])
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        datas.doc("ratings").get(getOptions).then(function(doc) {
            if (doc.exists) {
                $scope.ratings = doc.data();
                console.log("Loaded ratings:", $scope.ratings);
                // console.log($scope.ratings[1])
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        datas.doc("types").get(getOptions).then(function(doc) {
            if (doc.exists) {
                $scope.types = doc.data();
                console.log("Loaded types:", $scope.types);
                // console.log($scope.types[1])
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        datas.doc("weathers").get(getOptions).then(function(doc) {
            if (doc.exists) {
                $scope.weathers = doc.data();
                console.log("Loaded weathers:", $scope.weathers);
                // console.log($scope.weathers[1])
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
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
                // console.log(doc.id);
                // tile = doc.data();
                // console.log(tile);
            });
            $scope.tiles = alltiles;
            console.log($scope.tiles);
        });
    }

    $scope.selected = undefined;
    $scope.select = function(n) {
        if ($scope.selected != undefined) {
            save($scope.selected)
        }
        $scope.selected = $scope.tiles[n];
    };

    $scope.close = function() {
        save($scope.selected)
        $scope.selected = undefined;
    };

    var save = function(t) {
        console.log(t);
        // var temp = $scope.tiles;
        // temp[t.number] = t;
        // $scope.tiles = temp;


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
        batch.commit().then(function() {
            // ...
        });

    }
    $scope.loading = false;
    console.log($scope.tiles)
    if ($scope.tiles == undefined || $scope.tiles.length == 0) {
        $scope.tiles = JSON.parse(data);
    }

    console.log("Setting cache as " + n)
    localStorage['time'] = JSON.stringify(n);
    localStorage['tiles'] = JSON.stringify($scope.tiles);
    localStorage['biomes'] = JSON.stringify($scope.biomes);
    localStorage['owners'] = JSON.stringify($scope.owners);
    localStorage['weathers'] = JSON.stringify($scope.weathers);
    localStorage['types'] = JSON.stringify($scope.types);
    localStorage['ratings'] = JSON.stringify($scope.ratings);

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