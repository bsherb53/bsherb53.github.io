// const getRandomNameWithProbabilities = function () {
//     const getRandomElement = (array) => {
//         return array[Math.floor(Math.random() * array.length)];
//     };
//
//     const nameLength = Math.floor(Math.random() * 4) + 3; // Random length between 3 and 6 characters
//
//     const transitionProbabilities = globalProbabilities;
//
//     const getNextLetter = (currentLetter) => {
//         const nextLetterProbabilities = transitionProbabilities[currentLetter];
//         if (!nextLetterProbabilities) {
//             return getRandomElement(Object.keys(transitionProbabilities));
//         }
//
//         const nextLetterCandidates = Object.keys(nextLetterProbabilities);
//         const filteredCandidates = nextLetterCandidates.filter((letter) =>
//             Math.random() < nextLetterProbabilities[letter]
//         );
//
//         if (filteredCandidates.length === 0) {
//             return getRandomElement(nextLetterCandidates);
//         }
//
//         return getRandomElement(filteredCandidates);
//     };
//
//     let name = '';
//     let currentLetter = getRandomElement(Object.keys(transitionProbabilities));
//
//     for (let i = 0; i < nameLength; i++) {
//         name += currentLetter;
//         currentLetter = getNextLetter(currentLetter);
//     }
//
//     return name;
// }
// const init = function () {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//
//     for (let i = 0; i < alphabet.length; i++) {
//         const currentLetter = alphabet[i];
//         const nextLetters = {};
//
//         // Equal probability for each letter
//         for (let j = 0; j < alphabet.length; j++) {
//             const nextLetter = alphabet[j];
//             nextLetters[nextLetter] = 1 / alphabet.length;
//         }
//
//         globalProbabilities[currentLetter] = nextLetters;
//     }
//
//     learnProbabilities("brian");
//     // for (let i = 0; i < trainNames.length; i++) {
//     //     learnProbabilities(trainNames[i]);
//     // }
// }
// let globalProbabilities = {};
// const learnProbabilities = function (sample) {
//     const letterCounts = {};
//     for (let i = 0; i < sample.length; i++) {
//         let char = sample.charAt(i);
//         if (/[a-z]/.test(char)) {
//             const lowercaseChar = char.toLowerCase();
//             letterCounts[lowercaseChar] = (letterCounts[lowercaseChar] || 0) + 1;
//         }
//     }
//     const totalLetters = Object.values(letterCounts).reduce((sum, count) => sum + count, 0);
//
//     for (const currentLetter in letterCounts) {
//         const occurrences = letterCounts[currentLetter];
//         const nextLetters = globalProbabilities[currentLetter] || {};
//
//         for (const nextLetter in letterCounts) {
//             nextLetters[nextLetter] = (nextLetters[nextLetter] || 0) + (occurrences > 0 ? letterCounts[nextLetter] / totalLetters : 0);
//             globalProbabilities[currentLetter] = mixProbabilities(currentLetter, nextLetter, nextLetters);
//         }
//     }
//
//     console.log('learned probabilities', globalProbabilities);
//     return globalProbabilities;
// }
// const mixProbabilities = function (letter, nextLetter, addedProbs) {
//     let currentProbs = globalProbabilities[letter]
//
//     for (const l in currentProbs) {
//         let newProb = addedProbs[l];
//         let oldProb = currentProbs[l];
//
//
//         if (l === letter) {
//             console.log('matched letter', l)
//             currentProbs[l] = (newProb + oldProb) / 2;
//
//         } else {
//             currentProbs[l] = (newProb - oldProb) / 2;
//         }
//
//     }
//
//     return currentProbs
// }

const randomName = function () {
    const names = [
        "Emily",
        "Liam",
        "Olivia",
        "Noah",
        "Emma",
        "Ava",
        "Sophia",
        "Isabella",
        "Mia",
        "Aiden",
        "Jackson",
        "Lucas",
        "Sophia",
        "Olivia",
        "Emma",
        "Ava",
        "Isabella",
        "Mia",
        "Amelia",
        "Harper",
        "Evelyn",
        "Abigail",
        "Ella",
        "Scarlett",
        "Grace",
        "Chloe",
        "Liam",
        "Noah",
        "Oliver",
        "Ethan",
        "Aiden",
        "Lucas",
        "Mason",
        "Logan",
        "Elijah",
        "James",
        "Alexander",
        "Benjamin",
        "William",
        "Henry",
        "Jackson",
        "Owen",
        "Samuel",
        "Sebastian",
        "David",
        "Carter",
        "Wyatt",
        "Joseph",
        "Daniel",
        "Matthew",
        "Michael",
        "Emily",
        "Ava",
        "Sophia",
        "Olivia",
        "Emma",
        "Amelia",
        "Harper",
        "Mia",
        "Evelyn",
        "Abigail",
        "Ella",
        "Scarlett",
        "Grace",
        "Chloe",
        "Lily",
        "Aria",
        "Isla",
        "Zoe",
        "Aurora",
        "Savannah",
        "Penelope",
        "Victoria",
        "Aaliyah",
        "Scarlett",
        "Lily",
        "Riley",
        "Zoe",
        "Nora",
        "Lily",
        "Hannah",
        "Grace",
        "Lillian",
        "Ellie",
        "Leah",
        "Aurora",
        "Maya",
        "Audrey",
        "Bella",
        "Chloe",
        "Lucy",
        "Stella",
        "Nova",
        "Zoe",
        "Aurora",
        "Riley",
        "Bella",
        "Skylar",
        "Paisley",
        "Savannah",
        "Ethan",
        "Olivia",
        "Mason",
        "Ava",
        "Elijah",
        "Mia",
        "Logan",
        "Isabella",
        "Aiden",
        "Sophia",
        "Lucas",
        "Amelia",
        "Jackson",
        "Harper",
        "Grayson",
        "Evelyn",
        "Sebastian",
        "Abigail",
        "Carter",
        "Aria",
        "Noah",
        "Emily",
        "Liam",
        "Scarlett",
        "Owen",
        "Grace",
        "Wyatt",
        "Chloe",
        "Henry",
        "Lily",
        "Leo",
        "Addison",
        "Daniel",
        "Zoey",
        "Benjamin",
        "Ella",
        "Caleb",
        "Aubrey",
        "Matthew",
        "Aurora",
        "Samuel",
        "Hannah",
        "Jackson",
        "Layla",
        "Julian",
        "Mila",
        "Jack",
        "Penelope",
        "Oliver",
        "Scarlett",
        "Michael",
        "Lucy",
        "Ethan",
        "Aaliyah",
        "Daniel",
        "Zoe",
        "James",
        "Riley",
        "David",
        "Lily",
        "Joseph",
        "Sophia",
        "Gabriel",
        "Avery",
        "Isaac",
        "Mia",
        "Anthony",
        "Zoey",
        "Andrew",
        "Grace",
        "William",
        "Ava",
        "Samuel",
        "Sofia",
        "Christopher",
        "Madison",
        "John",
        "Harper",
        "Ryan",
        "Ellie",
        "Luke",
        "Stella",
        "Adam",
        "Leah",
        "Dylan",
        "Penelope",
        "Brandon",
        "Lillian",
        "Isaiah",
        "Chloe",
        "Owen",
        "Zoey",
        "Nathan",
        "Layla",
        "Caleb",
        "Avery",
        "Hunter",
        "Eleanor",
        "Jeremiah",
        "Skylar",
        "Xavier",
        "Naomi",
        "Lincoln",
        "Eliza",
        "Zane",
        "Genevieve",
        "Sawyer",
        "Cecilia",
        "Atlas",
        "Cora",
        "Jaxon",
        "Seraphina",
        "Felix",
        "Isla",
        "Silas",
        "Delilah",
        "Orion",
        "Matilda",
        "Kieran",
        "Esme",
        "Gideon",
        "Aurelia",
        "Magnus",
        "Adelaide",
        "Beckett",
        "Ophelia",
        "Sullivan",
        "Celeste",
        "Maximus",
        "Juniper",
        "Desmond",
        "Elodie",
        "Evander",
        "Mabel",
        "Augustus",
        "Anouk",
        "Remy",
        "Saoirse",
        "Leandro",
        "Celia",
        "Atticus",
        "Maeve",
        "Caspian",
        "Odette",
        "Lachlan",
        "Seren",
        "Rhys",
        "Lyra",
        "Dashiell",
        "Isolde",
        "Cassius",
        "Thalia",
        "Callum",
        "Saskia",
        "Ellis",
        "Aislinn",
        "Cassian",
        "Eira",
        "Caius",
        "Linnea",
        "Alaric",
        "Imogen",
        "Octavian",
        "Aveline",
        "Lucian",
        "Seraphine",
        "Peregrine",
        "Ione",
        "Thaddeus",
        "Elowen",
        "Soren",
        "Amara",
        "Emrys",
        "Isabeau",
        "Evadne",
        "Arlo",
        "Freesia",
        "Leif",
        "Mireille",
        "Theron",
        "Isolde",
        "Octavia",
        "Ansel",
        "Eulalia",
        "Peregrine",
        "Elestren",
        "Osiris",
        "Solene",
        "Niko",
        "Zephyrine",
        "Thalia",
        "Lysander",
        "Eulalia",
        "Finian",
        "Solene",
        "Elowen",
        "Eamon",
        "Thessaly",
        "Tadhg",
        "Isabeau",
    ]
    return names[Math.floor(Math.random() * names.length)];
}
export default {
    // genRandomName: getRandomNameWithProbabilities,
    // train: learnProbabilities,
    // init: init,
    randomName: randomName,
}