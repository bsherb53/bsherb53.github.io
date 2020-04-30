app.controller('mouseCtrl', function ($scope) {
    $scope.page = 1;
    $scope.nextPage = function (num) {
        if ($scope.page == 1 && num == -1) {
            return;
        }
        if ($scope.page == 13 && num == 1) {
            return;
        }
        $scope.page = $scope.page + num;
    }


    var mouse = JSON.parse(localStorage.getItem('mouse'));
    if (mouse == null) {
        $scope.mouse = blankMouse();
    } else {
        $scope.mouse = mouse;
    }
    console.log(mouse)


    // Add items to the mouse
    $scope.addFriend = function () {
        $scope.mouse.friends.push({
            name: "",
            profession: "",
            hometown: "",
            rank: "",
            description: ""
        });
        return 0;
    };

    $scope.addEnemy = function () {
        $scope.mouse.enemies.push({
            name: "",
            profession: "",
            hometown: "",
            rank: "",
            description: ""
        });
    };

    $scope.addTrait = function () {
        $scope.mouse.traits.push({
            name: "",
            description: "",
            level: 0,
            uses: 0,
            checks: ""
        });
    };

    $scope.addSkill = function () {
        $scope.mouse.skills.push({
            name: "",
            rating: 0,
            p: false,
            f: false,
            specialty: false
        });
    };
    // end add

    // remove items to the mouse
    $scope.removeFriend = function (index) {
        $scope.mouse.friends.splice(index, 1);
    }
    $scope.removeEnemy = function (index) {
        $scope.mouse.enemies.splice(index, 1);
    }
    $scope.removeTrait = function (index) {
        $scope.mouse.traits.splice(index, 1);
    }
    $scope.removeSkill = function (index) {
        $scope.mouse.skills.splice(index, 1);
    }
    // end remove

    // menu functions
    $scope.save = function () {
        console.log(mouse)
        localStorage.setItem('mouse', JSON.stringify($scope.mouse));
    }

    $scope.load = function () {
        var mouse = JSON.parse(localStorage.getItem('mouse'));
        if (mouse != null) {
            $scope.mouse = mouse;
            console.log(mouse)
        }
    }

    $scope.clear = function () {
        $scope.mouse = blankMouse();
    }
    // end menu
});

function blankMouse() {
    return {
        name: "",
        age: "",
        home: "",
        furColor: "",
        guardRank: "",
        cloakColor: "",
        notes: "",
        missions: "",
        backstory: "",
        personality: "",
        relations: defaultRelations(),
        friends: [{
            name: "Default Friend",
            profession: "",
            hometown: "",
            rank: "",
            description: ""
        }],
        enemies: [{
            name: "Default Enemy",
            profession: "",
            hometown: "",
            rank: "",
            description: ""
        }],
        traits: [{
            name: "Default Trait",
            description: "",
            level: 0,
            uses: 0,
            checks: ""
        }],
        nature: defaultNature(),
        will: {},
        health: {},
        resources: {},
        circles: {},
        wises: {},
        skills: defaultSkills(),
        specialty: "",
        disposition: {},
        conflictActions: {},
        conflictGoal: {},
        gear: {},

    };
}

function defaultSkills() {
    return [{
        name: "Fighter",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }, {
        name: "Healer",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }, {
        name: "Hunter",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }, {
        name: "Instructor",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }, {
        name: "Pathfinder",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }, {
        name: "Scout",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }, {
        name: "Survivalist",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }, {
        name: "Weather Watcher",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }, {
        name: "Orator",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }, {
        name: "Deceiver",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }, {
        name: "Persuader",
        rating: 0,
        p: false,
        f: false,
        specialty: false
    }]
};

function defaultRelations() {
    return [{
        type: "Father",
        name: "",
        profession: "",
        skill: "",
        age: "",
        deceased: false,
        hometown: "",
        description: ""
    }, {
        type: "Mother",
        name: "",
        profession: "",
        skill: "",
        age: "",
        deceased: false,
        hometown: "",
        description: ""
    }, {
        type: "S. Artisan",
        name: "",
        profession: "",
        skill: "",
        age: "",
        deceased: false,
        hometown: "",
        description: ""
    }, {
        type: "Mentor",
        name: "",
        profession: "",
        skill: "",
        age: "",
        deceased: false,
        hometown: "",
        description: ""
    }]
};

function defaultNature() {
    return {
        topRating: 3,
        bottomRating: 3,
        advancement: {}
    };
};