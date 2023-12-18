const allRaces = function () {
    return [
        {name: "Dragonborn", source: "Basic Rules"},
        {name: "Dwarf", source: "Basic Rules"},
        {name: "Elf", source: "Basic Rules"},
        {name: "Gnome", source: "Basic Rules"},
        {name: "Half-Elf", source: "Basic Rules"},
        {name: "Halfling", source: "Basic Rules"},
        {name: "Half-Orc", source: "Basic Rules"},
        {name: "Human", source: "Basic Rules"},
        {name: "Tiefling", source: "Basic Rules"},

        {name: "Aarakocra", source: "MotM"},
        {name: "Aasimar", source: "MotM"},
        {name: "Air Genasi", source: "MotM"},
        {name: "Centaur", source: "MotM"},
        {name: "Changeling", source: "MotM"},
        {name: "Deep Gnome", source: "MotM"},
        {name: "Duergar", source: "MotM"},
        {name: "Earth Genasi", source: "MotM"},
        {name: "Eladrin", source: "MotM"},
        {name: "Fairy", source: "MotM"},
        {name: "Firbolg", source: "MotM"},
        {name: "Fire Genasi", source: "MotM"},
        {name: "Githyanki", source: "MotM"},
        {name: "Githzerai", source: "MotM"},
        {name: "Goblin", source: "MotM"},
        {name: "Goliath", source: "MotM"},
        {name: "Harengon", source: "MotM"},
        {name: "Hobgoblin", source: "MotM"},
        {name: "Kenku", source: "MotM"},
        {name: "Kobold", source: "MotM"},
        {name: "Lizardfolk", source: "MotM"},
        {name: "Minotaur", source: "MotM"},
        {name: "Orc", source: "MotM"},
        {name: "Satyr", source: "MotM"},
        {name: "Sea Elf", source: "MotM"},
        {name: "Shadar-kai", source: "MotM"},
        {name: "Shifter", source: "MotM"},
        {name: "Tabaxi", source: "MotM"},
        {name: "Tortle", source: "MotM"},
        {name: "Triton", source: "MotM"},
        {name: "Water Genasi", source: "MotM"},
        {name: "Yuan-ti", source: "MotM"},

    ]
}

const allClasses = function () {
    return ['Artificer', 'Barbarian', 'Rogue', 'Fighter', 'Wizard', 'Warlock', 'Druid', 'Sorcerer',
        'Cleric', 'Bard']
}

export default {
    allClasses: allClasses,

    allRaces: allRaces,
}