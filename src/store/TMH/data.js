const sourceBasicRules = "Basic Rules";
const sourceMOtM = "Monsters of the Multiverse";
const sourceSAiS = "Spelljammer";
const sourceSotDQ = "Dragonlance";
const sourceSACoC = "Strixhaven";
const sourceVRGtR = "Guide to Ravenloft"
const sourceMOoT = "Mythic Odysseys of Theros"
const sourceERftLW = "Eberron: Rising"
const sourceAI = "Acquisitions Incorporated"
const sourceGGtR = "Guide to Ravnica"
const sourceSCAG = "Sword Coast"
const sourceLR = "Locathah Rising"
const sourceOGA = "One Grung Above"
const sourceTCoE = "Tasha's Cauldron of Everything"

const races = function () {
    return [
        {name: "Dragonborn", source: sourceBasicRules},
        {name: "Dwarf", source: sourceBasicRules},
        {name: "Elf", source: sourceBasicRules},
        {name: "Gnome", source: sourceBasicRules},
        {name: "Half-Elf", source: sourceBasicRules},
        {name: "Halfling", source: sourceBasicRules},
        {name: "Half-Orc", source: sourceBasicRules},
        {name: "Human", source: sourceBasicRules},
        {name: "Tiefling", source: sourceBasicRules},

        {name: "Aarakocra", source: sourceMOtM},
        {name: "Aasimar", source: sourceMOtM},
        {name: "Air Genasi", source: sourceMOtM},
        {name: "Centaur", source: sourceMOtM},
        {name: "Changeling", source: sourceMOtM},
        {name: "Deep Gnome", source: sourceMOtM},
        {name: "Duergar", source: sourceMOtM},
        {name: "Earth Genasi", source: sourceMOtM},
        {name: "Eladrin", source: sourceMOtM},
        {name: "Fairy", source: sourceMOtM},
        {name: "Firbolg", source: sourceMOtM},
        {name: "Fire Genasi", source: sourceMOtM},
        {name: "Githyanki", source: sourceMOtM},
        {name: "Githzerai", source: sourceMOtM},
        {name: "Goblin", source: sourceMOtM},
        {name: "Goliath", source: sourceMOtM},
        {name: "Harengon", source: sourceMOtM},
        {name: "Hobgoblin", source: sourceMOtM},
        {name: "Kenku", source: sourceMOtM},
        {name: "Kobold", source: sourceMOtM},
        {name: "Lizardfolk", source: sourceMOtM},
        {name: "Minotaur", source: sourceMOtM},
        {name: "Orc", source: sourceMOtM},
        {name: "Satyr", source: sourceMOtM},
        {name: "Sea Elf", source: sourceMOtM},
        {name: "Shadar-kai", source: sourceMOtM},
        {name: "Shifter", source: sourceMOtM},
        {name: "Tabaxi", source: sourceMOtM},
        {name: "Tortle", source: sourceMOtM},
        {name: "Triton", source: sourceMOtM},
        {name: "Water Genasi", source: sourceMOtM},
        {name: "Yuan-ti", source: sourceMOtM},

        {name: "Kender", source: sourceSotDQ},

        {name: "Astral Elf", source: sourceSAiS},
        {name: "Autognome", source: sourceSAiS},
        {name: "Giff", source: sourceSAiS},
        {name: "Hadozee", source: sourceSAiS},
        {name: "Plasmoid", source: sourceSAiS},
        {name: "Thri-kreen", source: sourceSAiS},

        {name: "Owlin", source: sourceSACoC},

        {name: "Lineages", source: sourceVRGtR},

        {name: "Leonin", source: sourceMOoT},

        {name: "Kalashtar", source: sourceERftLW},
        {name: "Warforged", source: sourceERftLW},

        {name: "Verdan", source: sourceAI},

        {name: "Loxodon", source: sourceGGtR},
        {name: "Simic Hybrid", source: sourceGGtR},
        {name: "Vedalken", source: sourceGGtR},

        {name: "Feral Tiefling", source: sourceSCAG},

        {name: "Locathah", source: sourceLR},

        {name: "Grung", source: sourceOGA},
    ].sort();
}

const classes = function () {
    return [
        {
            name: "Barbarian",
            source: sourceBasicRules,
            ability1: "str",
            ability2: "con",
            subclasses: [
                'Path of the Ancestral Guardian',
                'Path of the Battlerager',
                'Path of the Beast',
                'Path of the Berserker',
                'Path of the Giant',
                'Path of the Storm Herald',
                'Path of the Totem Warrior',
                'Path of the Zealot',
                'Path of Wild Magic', 'Path of the Juggernaut',
            ]
        },
        {
            name: "Bard",
            source: sourceBasicRules,
            ability1: "cha",
            ability2: "dex",
            subclasses: [
                'College of Creation',
                'College of Eloquence',
                'College of Lore',
                'College of Spirits',
                'College of Swords',
                'College of Valor',
                'College of Whispers',
                'College of Tragedy',
            ]
        },
        {
            name: "Cleric",
            source: sourceBasicRules,
            ability1: "wis",
            ability2: "str",
            ability3: "con",
            subclasses: [
                'Arcana Domain',
                'Death Domain',
                'Forge Domain',
                'Knowledge Domain',
                'Life Domain',
                'Light Domain',
                'Nature Domain',
                'Order Domain',
                'Peace Domain',
                'Tempest Domain',
                'Trickery Domain',
                'Twilight Domain',
                'War Domain',
                'Blood Domain',
                'Moon Domain',
            ]
        },
        {
            name: "Druid",
            source: sourceBasicRules,
            ability1: "wis",
            ability2: "con",
            subclasses: [
                'Circle of Dreams',
                'Circle of Spores',
                'Circle of Stars',
                'Circle of the Land',
                'Circle of the Moon',
                'Circle of the Shepherd',
                'Circle of Wildfire',
                'Circle of the Blighted',
            ]
        },
        {
            name: "Fighter",
            source: sourceBasicRules,
            ability1: "str",
            ability2: "con",
            ability3: "dex",
            subclasses: [
                'Arcane Archer',
                'Battle Master',
                'Cavalier',
                'Champion',
                'Eldritch Knight',
                'Psi Warrior',
                'Purple Dragon Knight',
                'Rune Knight',
                'Samurai',
                'Echo Knight',
                'Gunslinger',
            ]
        },
        {
            name: "Monk",
            source: sourceBasicRules,
            ability1: "dex",
            ability2: "wis",
            subclasses: [
                'Way of Mercy',
                'Way of Shadow',
                'Way of the Ascendant Dragon',
                'Way of the Astral Self',
                'Way of the Drunken Master',
                'Way of the Four Elements',
                'Way of the Kensei',
                'Way of the Long Death',
                'Way of the Open Hand',
                'Way of the Sun Soul',
                'Way of the Cobalt Soul',
            ]
        },
        {
            name: "Paladin",
            source: sourceBasicRules,
            ability1: "str",
            ability2: "cha",
            subclasses: [
                'Oath of Conquest',
                'Oath of Devotion',
                'Oath of Glory',
                'Oath of Redemption',
                'Oath of the Ancients',
                'Oath of the Crown',
                'Oath of the Watchers',
                'Oath of Vengeance',
                'Oath of Conquest',
                'Oathbreaker',
                'Oath of the Open Sea',
            ]
        },
        {
            name: "Ranger",
            source: sourceBasicRules,
            ability1: "dex",
            ability2: "wis",
            subclasses: [
                'Beast Master',
                'Drakewarden',
                'Fey Wanderer',
                'Gloom Stalker',
                'Horizon Walker',
                'Hunter',
                'Monster Slayer',
                'Swarmkeeper',
            ]
        },
        {
            name: "Rogue",
            source: sourceBasicRules,
            ability1: "dex",
            ability2: "con",
            subclasses: [
                'Arcane Trickster',
                'Assassin',
                'Inquisitive',
                'Mastermind',
                'Phantom',
                'Scout',
                'Soulknife',
                'Swashbuckler',
                'Thief',
            ]
        },
        {
            name: "Sorcerer",
            source: sourceBasicRules,
            ability1: "cha",
            ability2: "con",
            subclasses: [
                'Aberrant Mind',
                'Clockwork Soul',
                'Divine Soul',
                'Draconic Bloodline',
                'Lunar Sorcery',
                'Shadow Magic',
                'Storm Sorcery',
                'Wild Magic',
                'Runechild',
            ]
        },
        {
            name: "Warlock",
            source: sourceBasicRules,
            ability1: "cha",
            ability2: "con",
            subclasses: [
                'The Archfey',
                'The Celestial',
                'The Fathomless',
                'The Fiend',
                'The Genie',
                'The Great Old One',
                'The Hexblade',
                'The Undead',
                'The Undying',
            ]
        },
        {
            name: "Wizard",
            source: sourceBasicRules,
            ability1: "int",
            ability2: "con",
            ability3: "dex",
            subclasses: [
                'Bladesinging',
                'Order of Scribes',
                'School of Abjuration',
                'School of Conjuration',
                'School of Divination',
                'School of Enchantment',
                'School of Evocation',
                'School of Illusion',
                'School of Necromancy',
                'School of Transmutation',
                'War Magic',
                'Blood Magic',
                'Chronurgy Magic',
                'Graviturgy Magic',
            ]
        },
        {
            name: "Artificer",
            source: sourceTCoE,
            ability1: "int",
            ability2: "con",
            ability3: "dex",
            subclasses: [
                'Alchemist',
                'Armorer',
                'Artillerist',
                'Battle Smith',
            ]
        },
    ].sort();
}

const sources = function () {
    let sources = [
        sourceMOtM,
        sourceSAiS,
        sourceSotDQ,
        sourceSACoC,
        sourceVRGtR,
        sourceMOoT,
        sourceERftLW,
        sourceAI,
        sourceGGtR,
        sourceSCAG,
        sourceLR,
        sourceOGA,
        sourceTCoE,
    ].sort();

    // sort alphabetically then add the Basic Rules First
    sources.unshift(sourceBasicRules)
    return sources;
}
export default {
    allClasses: classes,
    allSources: sources,
    allRaces: races,
}