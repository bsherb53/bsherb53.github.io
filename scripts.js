var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    // var images = ["Academy.png","Aluminum.png","Ancient+ruins.png","Atoll.png","Bananas.png","Barbarian+encampment.png","Barringer+Crater.png","Camp+Deer.png","Camp+Furs.png","Camp+Ivory.png","Cattle.png","Cerro+de+Potosi.png","Citadel.png","City+ruins.png","City.png","Coal.png","Coast+Atoll.png","Coast+Ice.png","Coast+Oil+well.png","Coast.png","Cotton.png","Customs+house.png","Deer.png","Desert+City.png","Desert+Fallout.png","Desert+Farm.png","Desert+Flood+plains+Farm.png","Desert+Flood+plains+Trading+post.png","Desert+Flood+plains.png","Desert+Oasis.png","Desert+Trading+post.png","Desert.png","Dyes.png","El+Dorado.png","Fish.png","Fishing+Boats+Whales.png","Fishing+Boats.png","Fort.png","Fountain+of+Youth.png","Furs.png","Gems.png","Gold.png","Grand+Mesa.png","Grassland+City.png","Grassland+Fallout.png","Grassland+Farm.png","Grassland+Forest+Aluminum.png","Grassland+Forest+Camp+Deer.png","Grassland+Forest+Camp+Furs.png","Grassland+Forest+Camp.png","Grassland+Forest+Coal.png","Grassland+Forest+Gold.png","Grassland+Forest+Iron.png","Grassland+Forest+Lumber+mill.png","Grassland+Forest+Silver.png","Grassland+Forest.png","Grassland+Jungle+Camp.png","Grassland+Jungle+Trading+post.png","Grassland+Jungle.png","Grassland+Marsh.png","Grassland+Trading+post.png","Grassland.png","Great+Barrier+Reef.png","Hill+City.png","Hill+Fallout.png","Hill+Forest+Camp+Deer.png","Hill+Forest+Camp+Furs.png","Hill+Forest+Camp.png","Hill+Forest+Lumber+mill.png","Hill+Forest.png","Hill+Mine.png","Hill+Quarry.png","Hill+Terrace+Farm.png","Hill.png","Horses.png","Incense.png","Iron.png","Ivory.png","Krakatoa.png","Lakes.png","Landmark.png","Manufactory.png","Marble.png","Mine.png","Moai.png","Mount+Fuji.png","Mountain.png","Ocean+Atoll.png","Ocean+Ice.png","Ocean.png","Oil+well.png","Oil.png","Old+Faithful.png","Pasture+Cattle.png","Pasture+Horses.png","Pasture+Sheep.png","Pasture.png","Pasture2.png","Pearls.png","Plains+City.png","Plains+Fallout.png","Plains+Farm.png","Plains+Forest+Camp+Deer.png","Plains+Forest+Camp+Furs.png","Plains+Forest+Camp.png","Plains+Forest+Lumber+mill.png","Plains+Forest.png","Plains+Jungle+Trading+post.png","Plains+Jungle.png","Plains+Trading+post.png","Plains.png","Plantation+Bananas.png","Plantation+Cotton.png","Plantation+Dyes.png","Plantation+Incense.png","Plantation+Silk.png","Plantation+Spices.png","Plantation+Sugar.png","Plantation+Wine.png","Plantation.png","Polder.png","Quarry+Marble.png","Quarry+Stone.png","Quarry.png","River-Bottom.png","River-BottomLeft.png","River-BottomRight.png","River-Top.png","River-TopLeft.png","River-TopRight.png","Rock+of+Gibraltar.png","Sheep.png","Silk.png","Silver.png","Snow.png","Spices.png","Stone.png","Sugar.png","Tundra+City.png","Tundra+Fallout.png","Tundra+Forest+Camp+Deer.png","Tundra+Forest+Camp+Furs.png","Tundra+Forest+Camp.png","Tundra+Forest+Lumber+mill.png","Tundra+Forest.png","Tundra+Trading+post.png","Tundra.png","Uranium.png","Whales.png","Wheat.png","Wine.png"]



    var t = [];
    var i;
    var numTiles = 1520;
    for (i = 1; i <= numTiles; i++) {
        t.push({
            number: i,
            biome: "Forest",
            // src: "images/"+randomImage(),
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


    // function randomImage(){
    //   return images[Math.floor(Math.random() * images.length)]
    // }

});