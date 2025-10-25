const allMonsters = function () {
    return [
        squirtle(), pidgey(), machop(), abra(), ponyta(), sandshrew()
    ];
    // return [
    //     {
    //         "name": "Mew",
    //         "type": "Tiny monstrosity, unaligned",
    //         "armor_class": 22,
    //         "hit_points": "225 (50d4 + 100)",
    //         "speed": "20 ft., fly 60 ft.",
    //         "ability_scores": {"STR": 8, "DEX": 16, "CON": 14, "INT": 24, "WIS": 28, "CHA": 22},
    //         "saving_throws": {"DEX": "+10", "CON": "+9", "WIS": "+16"},
    //         "skills": {"Insight": "+16", "Persuasion": "+14", "Perception": "+16"},
    //         "saving_resistances": "bludgeoning, piercing, slashing from non-magical weapons",
    //         "senses": "passive Perception 26",
    //         "languages": "Pokemon, can understand Common but can’t speak it",
    //         "challenge": "23 (50,000 XP)",
    //         "traits": {
    //             "Legendary Resistance (3/Day)": "If the pokemon fails a saving throw, it can choose to succeed instead.",
    //             "Ancestor": "The pokemon can change the damage type of any attack it makes to anything it wishes.",
    //             "Magic Resistance": "The pokemon has advantage on saving throws against spells and other magical effects.",
    //             "Ancient Power": "The pokemon can use telekinesis as a bonus action at will. It can also maintain the spell as a bonus action.",
    //             "Premonition": "The pokemon adds its Wisdom modifier to its AC (included)."
    //         },
    //         "actions": {
    //             "Multiattack": "The pokemon makes two weapon attacks.",
    //             "Psychic (Recharge 5-6)": "The pokemon unleashes a devastating wave of psychic energy. Each creature within 60 feet must make a DC 24 Wisdom saving throw, taking 70 (20d6) psychic damage on a failed save, or half as much on a successful one.",
    //             "Mega Punch": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) bludgeoning damage.",
    //             "Aura Sphere": "Ranged Weapon Attack: +16 to hit, range 100/300 ft., one target. Hit: 35 (10d6) psychic damage.",
    //             "Invisibility": "The pokemon turns invisible until it attacks, casts a spell, or its concentration is broken, up to 1 hour (as if concentrating on a spell).",
    //             "Copy": "The pokemon mimics an attack or spell that was just used, using the original stats for the attack."
    //         },
    //         "reactions": {"Deflect": "The pokemon adds 7 to its AC against one melee attack that would hit it."},
    //         "legendary_actions": {
    //             "description": "The pokemon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature’s turn. The pokemon regains spent legendary actions at the start of its turn.",
    //             "options": {
    //                 "Invisible": "The pokemon uses Invisibility.",
    //                 "Copy": "The pokemon uses Copy.",
    //                 "Aura Sphere": "The pokemon uses Aura Sphere."
    //             }
    //         },
    //         "image": "https://img.pokemondb.net/artwork/large/mew.jpg"
    //     },
    //     {
    //         "name": "Mewtwo",
    //         "type": "Large aberration, unaligned",
    //         "armor_class": 19,
    //         "hit_points": "304 (32d10 + 128)",
    //         "speed": "30 ft., fly 60 ft.",
    //         "ability_scores": {"STR": 16, "DEX": 14, "CON": 18, "INT": 28, "WIS": 24, "CHA": 20},
    //         "saving_throws": {"DEX": "+9", "CON": "+11"},
    //         "skills": {"Investigation": "+16", "Insight": "+14", "Intimidation": "+12", "Perception": "+14"},
    //         "saving_resistances": "bludgeoning, piercing, slashing from non-magical weapons",
    //         "senses": "Truesight 120 ft., passive Perception 24",
    //         "languages": "Telepathy 120 ft., can understand Common but can’t speak",
    //         "challenge": "23 (50,000 XP)",
    //         "traits": {
    //             "Legendary Resistance (3/Day)": "If the pokemon fails a saving throw, it can choose to succeed instead.",
    //             "Recover": "The pokemon recovers 10 hit points at the start of its turn.",
    //             "Safeguard": "The pokemon is immune to status conditions.",
    //             "Genetic Pokemon": "The pokemon can use telekinesis as a bonus action at will. It can also maintain the spell as a bonus action.",
    //             "Premonition": "The pokemon adds its Wisdom modifier to its AC (included)."
    //         },
    //         "actions": {
    //             "Psychic (Recharge 5-6)": "The pokemon unleashes a devastating wave of psychic energy. Each creature within 60 feet must make a DC 24 Wisdom saving throw, taking 77 (22d6) psychic damage on a failed save, or half as much on a successful one.",
    //             "Psycho Cut": "Melee Weapon Attack: +16 to hit, reach 5 ft., one target. Hit: 28 (6d6 + 7) force damage.",
    //             "Psy Strike": "Ranged Weapon Attack: +16 to hit, range within eyesight, one target. Hit: 28 (6d6 + 7) psychic damage."
    //         },
    //         "reactions": {"Deflect": "The pokemon adds 7 to its AC against one melee attack that would hit it."},
    //         "legendary_actions": {
    //             "description": "The pokemon can take 3 legendary actions, choosing from the options below. Only one option can be used at a time and only at the end of another creature’s turn. The pokemon regains spent legendary actions at the start of its turn.",
    //             "options": {
    //                 "Disable": "One creature within 100 feet must succeed on a DC 24 Wisdom saving throw or be unable to make attacks or cast spells (Mewtwo’s choice) for 1 minute. The creature can repeat the save at the end of its turns.",
    //                 "Attack": "The pokemon can make one Psy Strike or Psycho Cut attack.",
    //                 "Teleport": "The pokemon can teleport up to 100 feet."
    //             }
    //         },
    //         "image": "https://img.pokemondb.net/artwork/large/mewtwo.jpg"
    //     },
    //     {
    //         "name": "Dratini",
    //         "type": "Medium dragon, unaligned",
    //         "armor_class": 13,
    //         "hit_points": "54 (12d8)",
    //         "speed": "30 ft.",
    //         "ability_scores": {"STR": 14, "DEX": 12, "CON": 10, "INT": 6, "WIS": 12, "CHA": 11},
    //         "senses": "passive Perception 10",
    //         "languages": "Pokemon, can understand Common but can’t speak",
    //         "challenge": "1 (200 XP)",
    //         "actions": {"Wrap": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage and the target is grappled (escape DC 12). Only one creature can be grappled at a time."},
    //         "reactions": {"Shed": "The pokemon ends one condition on it."},
    //         "image": "https://img.pokemondb.net/artwork/large/dratini.jpg"
    //     },
    //     {
    //         "name": "Dragonair",
    //         "type": "Huge dragon, unaligned",
    //         "armor_class": 15,
    //         "hit_points": "190 (20d12 + 60)",
    //         "speed": "30 ft., fly 30 ft.",
    //         "ability_scores": {"STR": 18, "DEX": 14, "CON": 16, "INT": 6, "WIS": 14, "CHA": 14},
    //         "saving_throws": {"WIS": "+6", "CHA": "+6"},
    //         "senses": "passive Perception 12",
    //         "languages": "Pokemon, can understand Common but can’t speak",
    //         "challenge": "9 (5,000 XP)",
    //         "traits": {"Innate Spellcasting": "The pokemon’s spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring no material components: at will: call lightning, fog cloud, gust of wind, ice storm; 1/day each: control weather."},
    //         "actions": {
    //             "Multiattack": "The pokemon makes two melee attacks.",
    //             "Dragon Rage (Recharge 5-6)": "The pokemon exhales a typhoon of energy in a 60-foot cone. Each creature in that area must make a DC 14 Dexterity saving throw, taking 35 (10d6) force damage on a failed save, or half as much on a successful one.",
    //             "Dragon Tail": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 17 (3d8 + 4) bludgeoning damage and the target is grappled (escape DC 16).",
    //             "Wrap": "The pokemon can use this attack as a bonus action against a grappled creature. The grappled creature must make a DC 16 Strength saving throw, taking 17 (3d8 + 4) bludgeoning damage on a failed save, or half as much on a successful one."
    //         },
    //         "reactions": {"Shed Skin": "The pokemon ends one condition on it."},
    //         "image": "https://img.pokemondb.net/artwork/large/dragonair.jpg"
    //     },
    //     {
    //         "name": "Dragonite",
    //         "type": "Large dragon, unaligned",
    //         "armor_class": 17,
    //         "hit_points": "247 (26d10 + 104)",
    //         "speed": "30 ft., fly 100 ft.",
    //         "ability_scores": {"STR": 22, "DEX": 18, "CON": 16, "INT": 16, "WIS": 13, "CHA": 20},
    //         "saving_throws": {"WIS": "+7", "CHA": "+9"},
    //         "saving_resistances": "bludgeoning, piercing, slashing from non-magical weapons",
    //         "senses": "passive Perception 13",
    //         "languages": "Pokemon, can understand Common but can’t speak",
    //         "challenge": "12 (8,400 XP)",
    //         "traits": {"Amphibious": "The pokemon can breathe air and water."},
    //         "actions": {
    //             "Multiattack": "The pokemon makes three attacks between Claw and Twister.",
    //             "Hyper Beam (Recharge 5-6)": "The pokemon projects a beam of energy in a 60-foot line that is 5 feet wide. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) force damage on a failed save, or half as much on a successful one.",
    //             "Claw": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage.",
    //             "Twister": "Ranged Weapon Attack: +10 to hit, range 60/120 ft., one target. Hit: 16 (3d10) bludgeoning damage."
    //         },
    //         "reactions": {"Shed Skin": "The pokemon ends one condition on it."},
    //         "image": "https://img.pokemondb.net/artwork/large/dragonite.jpg"
    //     }
    // ];
}

const getPokemon = function (id) {
    // console.log(id)
    switch (id) {
        case squirtle().id:
            return squirtle();
        case pidgey().id:
            return pidgey();
        case machop().id:
            return machop();
        case abra().id:
            return abra();
        case ponyta().id:
            return ponyta();
        case sandshrew().id:
            return sandshrew();
    }
    return null;
}

const squirtle = function () {
    return {
        id: "Carson",
        name: "Squirtle",
        type: "Small beast, unaligned",
        armor_class: 15,
        hit_points: 25,
        speed: "25 ft., swim 30 ft.",
        ability_scores: {
            STR: 10,
            DEX: 12,
            CON: 14,
            INT: 8,
            WIS: 12,
            CHA: 10
        },
        saving_throws: {
            CON: "+4"
        },
        skills: {
            Perception: "+3",
            Athletics: "+2"
        },
        senses: "passive Perception 13",
        languages: "understands Pokemon, but can't speak",
        challenge: "1/2 (100 XP)",
        traits: {
            Amphibious: "The pokemon can breathe air and water.",
            Withdraw: "As a bonus action, the pokemon can retreat into its shell, gaining +2 AC until the start of its next turn."
        },
        actions: {
            WaterGun: "Ranged Weapon Attack: +4 to hit, range 30/90 ft., one target. Hit: 9 (2d8) cold damage.",
            Tackle: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (1d10 + 1) bludgeoning damage."
        },
        image: "https://img.pokemondb.net/artwork/large/squirtle.jpg"
    }
}

const pidgey = function () {
    return {
        id: "Kevin",
        name: "Pidgey",
        type: "Tiny beast, unaligned",
        armor_class: 13,
        hit_points: 25,
        speed: "10 ft., fly 40 ft.",
        ability_scores: {
            STR: 6,
            DEX: 15,
            CON: 14,
            INT: 4,
            WIS: 12,
            CHA: 8
        },
        skills: {
            Perception: "+4"
        },
        senses: "passive Perception 14",
        languages: "understands Pokemon, but can't speak",
        challenge: "1/4 (50 XP)",
        traits: {
            KeenSight: "The pokemon has advantage on Wisdom (Perception) checks that rely on sight.",
            Gust: "Ranged Weapon Attack: +4 to hit, range 30 ft., one target. Hit: 7 (2d6) bludgeoning damage."
        },
        actions: {
            QuickAttack: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) bludgeoning damage.",
            SandAttack: "Ranged Weapon Attack: +3 to hit, range 20/60 ft., one target. On a hit, the target must succeed on a DC 12 Constitution saving throw or have disadvantage on attack rolls until the end of its next turn."
        },
        image: "https://img.pokemondb.net/artwork/large/pidgey.jpg"
    }

}
const machop = function () {
    return {

        id: "Jarrad",
        name: "Machop",
        type: "Medium humanoid, unaligned",
        armor_class: 13,
        hit_points: 25,
        speed: "30 ft.",
        ability_scores: {
            STR: 16,
            DEX: 12,
            CON: 14,
            INT: 8,
            WIS: 10,
            CHA: 10
        },
        skills: {
            Athletics: "+5",
            Intimidation: "+2"
        },
        senses: "passive Perception 10",
        languages: "understands Pokemon, but can't speak",
        challenge: "1 (200 XP)",
        traits: {
            BruteStrength: "A melee weapon deals one extra die of its damage when Machop hits with it.",
            FocusEnergy: "Once per short rest, Machop can enter a focused stance as a bonus action, gaining advantage on melee attacks until the start of its next turn."
        },
        actions: {
            KarateChop: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage.",
            LowKick: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) bludgeoning damage. If the target is Large or larger, it must succeed on a DC 13 Strength saving throw or fall prone."
        },
        image: "https://img.pokemondb.net/artwork/large/machop.jpg"
    }
}

const ponyta = function () {
    return {

        id: "Roger",
        name: "Ponyta",
        type: "Medium beast, unaligned",
        armor_class: 14,
        hit_points: 25,
        speed: "60 ft.",
        ability_scores: {
            STR: 14,
            DEX: 16,
            CON: 14,
            INT: 6,
            WIS: 12,
            CHA: 10
        },
        skills: {
            Acrobatics: "+5"
        },
        senses: "passive Perception 11",
        languages: "understands Pokemon, but can't speak",
        challenge: "1 (200 XP)",
        traits: {
            FieryBody: "A creature that touches the pokemon or hits it with a melee attack while within 5 feet takes 3 (1d6) fire damage.",
            SureFooted: "The pokemon has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
        },
        actions: {
            FlameCharge: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d8 + 1) fire damage.",
            Ember: "Ranged Weapon Attack: +4 to hit, range 30/90 ft., one target. Hit: 9 (2d8) fire damage."
        },
        image: "https://img.pokemondb.net/artwork/large/ponyta.jpg"
    }
}

// const diglett = function () {
//     return {
//
//         id: "Lance",
//         name: "Diglett",
//         type: "Tiny beast, unaligned",
//         armor_class: 13,
//         hit_points: "17 (5d4 + 5)",
//         speed: "20 ft., burrow 30 ft.",
//         ability_scores: {
//             STR: 8,
//             DEX: 14,
//             CON: 12,
//             INT: 6,
//             WIS: 10,
//             CHA: 8
//         },
//         skills: {
//             Stealth: "+4",
//             Perception: "+2"
//         },
//         senses: "tremorsense 30 ft., passive Perception 12",
//         languages: "understands Pokemon, but can't speak",
//         challenge: "1/4 (50 XP)",
//         traits: {
//             Tunneler: "The pokemon can burrow through soil and loose earth, leaving a 5-foot-wide tunnel behind it.",
//             SandVeil: "The pokemon has advantage on Dexterity (Stealth) checks made to hide in sandy or dusty terrain."
//         },
//         actions: {
//             MudSlap: "Ranged Weapon Attack: +4 to hit, range 20/60 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage and the target has disadvantage on its next attack roll.",
//             Scratch: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."
//         },
//         image: "https://img.pokemondb.net/artwork/large/diglett.jpg"
//     }
// }

const sandshrew = function () {
    return {

        id: "Tyson",
        name: "Sandshrew",
        type: "Small beast, unaligned",
        armor_class: 15,
        hit_points: 25,
        speed: "30 ft., burrow 20 ft.",
        ability_scores: {
            STR: 12,
            DEX: 14,
            CON: 14,
            INT: 6,
            WIS: 10,
            CHA: 8
        },
        skills: {
            Stealth: "+4",
            Athletics: "+3"
        },
        senses: "tremorsense 30 ft., passive Perception 10",
        languages: "understands Pokemon, but can't speak",
        challenge: "1/2 (100 XP)",
        traits: {
            CurlUp: "As a bonus action, the pokemon can curl into a defensive ball, gaining +2 AC until the start of its next turn but reducing its speed to 0.",
            SandCloak: "While in sandy terrain, the pokemon is lightly obscured and has advantage on Dexterity (Stealth) checks."
        },
        actions: {
            Rollout: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d8 + 1) bludgeoning damage.",
            Scratch: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6 + 1) slashing damage."
        },
        image: "https://img.pokemondb.net/artwork/large/sandshrew.jpg"
    }

}

const abra = function () {
    return {
        id:"Lance",
        name: "Abra",
        type: "Small monstrosity, unaligned",
        armor_class: 12,
        hit_points: 25,
        speed: "30 ft.",
        ability_scores: {
            STR: 6,
            DEX: 14,
            CON: 12,
            INT: 16,
            WIS: 14,
            CHA: 12
        },
        skills: {
            Arcana: "+5",
            Insight: "+4",
            Perception: "+4"
        },
        senses: "passive Perception 14",
        languages: "telepathy 30 ft., understands Pokemon",
        challenge: "1/2 (100 XP)",
        traits: {
            InnateTelepathy: "Abra can communicate telepathically with any creature it can see within 30 feet.",
            PsionicReflex: "If surprised, Abra can use its reaction to teleport up to 30 feet to an unoccupied space it can see.",
            MagicResistance: "Abra has advantage on saving throws against spells and other magical effects."
        },
        actions: {
            Confusion: "Ranged Spell Attack: +5 to hit, range 60 ft., one target. Hit: 10 (3d6) psychic damage, and the target must succeed on a DC 13 Wisdom saving throw or be confused until the end of its next turn.",
            Teleport: "(Recharge 5–6) Abra instantly teleports itself, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
        },
        image: "https://img.pokemondb.net/artwork/large/abra.jpg"
    }

}

export default {
    allMonsters: allMonsters,
    getPokemon: getPokemon,
}