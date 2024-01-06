<template>
  <div class="tmh">
    <div>Welcome to 2 Minute Heroes</div>
    <!--    <div>Create a random character</div>-->
    <div>
      <StdButton v-if="pageNum > 0" text="Back" @click="prevPage"/>
      <!--      <StdButton v-if="pageNum < 1" text="Next" @click="nextPage"/>-->
      <!--      <StdButton v-if="pageNum ===1" buttonStyle="primary" text="Create" @click="randomCharacter"/>-->
      <!--      {{ pageNum }}-->
    </div>
    <!--    <StdButton v-if="!showSources" class="sources-toggle" text="Sources" @click="showSources = !showSources"/>-->
    <div v-if="pageNum === 0">
      <TMHSources :user-sources="cSources" @saved="filterSources"/>
    </div>
    <div v-else-if="pageNum === 1">
      <TMHGenMethod :choice="method" :max="maxRoll" :min="minRoll" @changed="changedMethod" @saved="savedMethod"/>
    </div>
    <div v-else-if="pageNum ===2">
      <CharacterViewer :char="character"/>
    </div>
    <div v-else class="tmh-char">
      <!--      <StdInput v-model="name" :value="name" class="tmh-char-name" hint="What's the name?" label="Name"/>-->

      <StdButton buttonStyle="primary" text="Create" @click="randomCharacter"/>
      <div v-if="errMsg" class="tmh-error">{{ errMsg }}</div>
      <div v-if="raceErrMsg" class="tmh-error">{{ raceErrMsg }}</div>
      <div v-if="classErrMsg" class="tmh-error">{{ classErrMsg }}</div>
      <div v-if="loading">Loading</div>

      <div class="tmh-future">
        <div class="tmh-future-title">Future Enhancements</div>
        <div>Quirks/Traits/Bonds/Flaws</div>
        <div>Sizes/Heights/Weights/Traits/Color</div>
      </div>
    </div>
  </div>
</template>

<script>
import StdButton from "@/components/Button";
import data from "@/store/TMH/data";
import helpers from "@/store/TMH/helpers";
import TMHSources from "@/components/tmh/TMHSources";
import TMHGenMethod from "@/components/tmh/TMHGenMethod";
import CharacterViewer from "@/components/tmh/CharacterViewer";

export default {
  name: 'TwoMinuteHeroes',
  components: {CharacterViewer, TMHGenMethod, TMHSources, StdButton},
  data() {
    return {
      loading: false,
      character: {
        name: "",
        race: {
          name: "",
          source: "",
        },
        class: {
          name: "",
          source: "",
        },
        subclass: "",
        abilities: {
          str: 10,
          dex: 10,
          con: 10,
          int: 10,
          wis: 10,
          cha: 10,
        }
      },
      name: "",
      cName: "",
      cRace: null,
      cClass: null,
      subClass: null,
      cAbilities: {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
      },
      // sources: data.allSources(),
      errMsg: null,
      raceErrMsg: null,
      classErrMsg: null,

      pageNum: 0,

      //sources
      cSources: {},
      showSources: false,

      // ability generation
      method: "Standard Array",
      minRoll: 8,
      maxRoll: 18,
    }
  },
  created() {
  },
  methods: {
    prevPage() {
      if (this.pageNum > 0) {
        this.pageNum--;
      }
    },
    nextPage() {
      this.pageNum++;
    },
    filterSources(d) {
      // console.log("received saved sources", d);
      this.cSources = d;
      this.nextPage();
    },
    changedMethod(m, min, max) {
      console.log("recording changed", m, min, max)
      this.method = m;
      this.minRoll = min;
      this.maxRoll = max;
    },
    savedMethod(m, min, max) {
      this.method = m;
      this.minRoll = min;
      this.maxRoll = max;
      this.randomCharacter();
    },
    randomName() {
      const getRandomElement = (array) => {
        return array[Math.floor(Math.random() * array.length)];
      };

      const vowels = 'aeiou';
      const consonants = 'bcdfghjklmnpqrstvwxyz';

      const getRandomSyllable = () => {
        const syllable = getRandomElement(consonants) + getRandomElement(vowels);
        return Math.random() < 0.5 ? syllable : getRandomElement(consonants) + syllable;
      };

      const getRandomFirstName = () => {
        const syllableCount = Math.floor(Math.random() * 3) + 1;
        return Array.from({length: syllableCount}, () => getRandomSyllable()).join('');
      };

      const getRandomLastName = () => {
        const syllableCount = Math.floor(Math.random() * 5) + 1;
        return Array.from({length: syllableCount}, () => getRandomSyllable()).join('');
      };

      const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      };

      const randomFirstName = capitalizeFirstLetter(getRandomFirstName());
      const randomLastName = capitalizeFirstLetter(getRandomLastName());

      return `${randomFirstName} ${randomLastName}`;
    },
    async randomCharacter() {
      this.errMsg = null;
      this.raceErrMsg = null;
      this.classErrMsg = null;
      if (!this.hasChar) {
        this.loading = true;
      }

      this.name = this.randomName();
      this.character.name = this.name;
      this.character.race = this.randomRace();
      let c = this.randomClass();
      let sc = c.subclasses;
      console.log("class", c);
      console.log("subclasses", sc);
      this.character.subclass = sc[Math.floor(Math.random() * sc.length)]
      this.character.abilities = this.genAbilities();

      await new Promise(r => setTimeout(r, 200));
      this.loading = false;
      this.nextPage();
    },
    randomRace() {
      let races = data.allRaces();
      // filter out the ones based on the sources
      const enabled = this.enabledSources();
      // console.log(enabled);

      if (enabled.length > 0) {
        let filteredRaces = races.filter(function (el) {
          return enabled.includes(el.source);
        })

        if (filteredRaces.length > 0) {
          races = filteredRaces;
        } else {
          this.raceErrMsg = "No races given the selection, using all sources."
        }
      }

      return races[Math.floor(Math.random() * races.length)];
    },
    randomClass() {
      let classes = data.allClasses()
      const enabled = this.enabledSources();
      if (enabled.length > 0) {
        let filteredClasses = classes.filter(function (el) {
          return enabled.includes(el.source);
        })
        if (filteredClasses.length > 0) {
          classes = filteredClasses;
        } else {
          this.classErrMsg = "No classes given the selection, using all sources."
        }
      }
      return classes[Math.floor(Math.random() * classes.length)];
    },
    genAbilities() {
      let numbers = [15, 14, 13, 12, 10, 8];
      switch (this.method) {
        case "Rolled":
          numbers = [
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll),
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll),
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll),
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll),
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll),
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll)
          ]
          break;
        case "Point Buy":
          return [];
      }

      // use the class and see what is the biggest to smallest
      return helpers.asiFromNumbers(this.character.class, numbers);
    },
    // toggleSource(key) {
    //   this.sources[key] = !this.sources[key];
    //   this.cSources[key] = !this.cSources[key];
    // },
    enabledSources() {
      let enabled = [];
      for (const [key, value] of Object.entries(this.cSources)) {
        // console.log(key, value)
        if (value === true) {
          enabled.push(key)
        }
      }
      return enabled;
    }
  },
  computed: {
    hasChar() {
      return this.cRace !== null && !this.loading;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tmh {
  margin: 0 auto;
  text-align: center;
  width: 60%;


  &-error {
    color: $color-red;
  }


  &-future {
    font-size: 12px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 4px auto;

    &-title {
      font-size: 16px;
      text-decoration: underline;
    }
  }
}

.abilities {
  display: flex;
  justify-content: space-evenly;
  margin: auto;
}

.ability {
  border: 1px solid green;
  padding: 4px;
  border-radius: 4px;
  box-shadow: $shadow-small;

  &-title {
    text-transform: uppercase;
  }
}

</style>
