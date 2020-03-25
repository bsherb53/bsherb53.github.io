var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    // var images = ["Academy.png","Aluminum.png","Ancient+ruins.png","Atoll.png","Bananas.png","Barbarian+encampment.png","Barringer+Crater.png","Camp+Deer.png","Camp+Furs.png","Camp+Ivory.png","Cattle.png","Cerro+de+Potosi.png","Citadel.png","City+ruins.png","City.png","Coal.png","Coast+Atoll.png","Coast+Ice.png","Coast+Oil+well.png","Coast.png","Cotton.png","Customs+house.png","Deer.png","Desert+City.png","Desert+Fallout.png","Desert+Farm.png","Desert+Flood+plains+Farm.png","Desert+Flood+plains+Trading+post.png","Desert+Flood+plains.png","Desert+Oasis.png","Desert+Trading+post.png","Desert.png","Dyes.png","El+Dorado.png","Fish.png","Fishing+Boats+Whales.png","Fishing+Boats.png","Fort.png","Fountain+of+Youth.png","Furs.png","Gems.png","Gold.png","Grand+Mesa.png","Grassland+City.png","Grassland+Fallout.png","Grassland+Farm.png","Grassland+Forest+Aluminum.png","Grassland+Forest+Camp+Deer.png","Grassland+Forest+Camp+Furs.png","Grassland+Forest+Camp.png","Grassland+Forest+Coal.png","Grassland+Forest+Gold.png","Grassland+Forest+Iron.png","Grassland+Forest+Lumber+mill.png","Grassland+Forest+Silver.png","Grassland+Forest.png","Grassland+Jungle+Camp.png","Grassland+Jungle+Trading+post.png","Grassland+Jungle.png","Grassland+Marsh.png","Grassland+Trading+post.png","Grassland.png","Great+Barrier+Reef.png","Hill+City.png","Hill+Fallout.png","Hill+Forest+Camp+Deer.png","Hill+Forest+Camp+Furs.png","Hill+Forest+Camp.png","Hill+Forest+Lumber+mill.png","Hill+Forest.png","Hill+Mine.png","Hill+Quarry.png","Hill+Terrace+Farm.png","Hill.png","Horses.png","Incense.png","Iron.png","Ivory.png","Krakatoa.png","Lakes.png","Landmark.png","Manufactory.png","Marble.png","Mine.png","Moai.png","Mount+Fuji.png","Mountain.png","Ocean+Atoll.png","Ocean+Ice.png","Ocean.png","Oil+well.png","Oil.png","Old+Faithful.png","Pasture+Cattle.png","Pasture+Horses.png","Pasture+Sheep.png","Pasture.png","Pasture2.png","Pearls.png","Plains+City.png","Plains+Fallout.png","Plains+Farm.png","Plains+Forest+Camp+Deer.png","Plains+Forest+Camp+Furs.png","Plains+Forest+Camp.png","Plains+Forest+Lumber+mill.png","Plains+Forest.png","Plains+Jungle+Trading+post.png","Plains+Jungle.png","Plains+Trading+post.png","Plains.png","Plantation+Bananas.png","Plantation+Cotton.png","Plantation+Dyes.png","Plantation+Incense.png","Plantation+Silk.png","Plantation+Spices.png","Plantation+Sugar.png","Plantation+Wine.png","Plantation.png","Polder.png","Quarry+Marble.png","Quarry+Stone.png","Quarry.png","River-Bottom.png","River-BottomLeft.png","River-BottomRight.png","River-Top.png","River-TopLeft.png","River-TopRight.png","Rock+of+Gibraltar.png","Sheep.png","Silk.png","Silver.png","Snow.png","Spices.png","Stone.png","Sugar.png","Tundra+City.png","Tundra+Fallout.png","Tundra+Forest+Camp+Deer.png","Tundra+Forest+Camp+Furs.png","Tundra+Forest+Camp.png","Tundra+Forest+Lumber+mill.png","Tundra+Forest.png","Tundra+Trading+post.png","Tundra.png","Uranium.png","Whales.png","Wheat.png","Wine.png"]
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
    console.log(app);
    firebase.analytics();
    var db = firebase.firestore();
    console.log(db);



    // get a document
    var datas = db.collection("datum")
    datas.doc("biomes").get().then(function(doc) {
        if (doc.exists) {
            $scope.biomes = doc.data();
            console.log("Loaded Biomes:", $scope.biomes);
            console.log($scope.biomes[1])
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    datas.doc("owners").get().then(function(doc) {
        if (doc.exists) {
            $scope.owners = doc.data();
            console.log("Loaded owners:", $scope.owners);
            console.log($scope.owners[1])
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    datas.doc("ratings").get().then(function(doc) {
        if (doc.exists) {
            $scope.ratings = doc.data();
            console.log("Loaded ratings:", $scope.ratings);
            console.log($scope.ratings[1])
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    datas.doc("types").get().then(function(doc) {
        if (doc.exists) {
            $scope.types = doc.data();
            console.log("Loaded types:", $scope.types);
            console.log($scope.types[1])
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    datas.doc("weathers").get().then(function(doc) {
        if (doc.exists) {
            $scope.weathers = doc.data();
            console.log("Loaded weathers:", $scope.weathers);
            console.log($scope.weathers[1])
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    // finish getting document


    // get tiles from firebase:
    var tiles = db.collection("tiles")
    var alltiles = [];
    db.collection("tiles").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            tile = doc.data();
            tile.id = doc.id;
            alltiles.push(tile);
            // console.log(doc.id);
            // tile = doc.data();
            // console.log(tile);
        });
        console.log(alltiles);
        $scope.tiles = alltiles;
    });

    $scope.loading = true;

    $scope.tiles = [];

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
        batch.commit().then(function () {
            // ...
        });

    }

    $scope.loading = false;
    $scope.tiles = JSON.parse(data);


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