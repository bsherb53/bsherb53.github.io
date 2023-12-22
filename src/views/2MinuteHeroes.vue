<template>
  <div class="tmh">
    <div>Welcome to 2 Minute Heroes</div>
    <div>Create a random character</div>
    <StdButton class="sources-toggle" text="Filter Sources" @click="showSources = !showSources"/>
    <div v-if="showSources" class="sources">
      <div v-for="(v, i) in sources" :key="i" class="sources-source">
        <CheckBox :text="v" :value="cSources[v]" @changed="toggleSource(v)"/>
      </div>
    </div>
    <div v-else class="tmh-char">
      <StdInput v-model="name" :value="name" class="tmh-char-name" hint="What's the name?" label="Name"/>
      <div class="tmh-generation">
        <div>Generation Method</div>
        <div class="tmh-generation-options">
          <CheckBox :value="method === stdArray" text="Standard Array" @click="toggleGenMethod(stdArray)"/>
          <CheckBox :value="method === pointBuy" text="Point Buy" @click="toggleGenMethod(pointBuy)"/>
          <CheckBox :value="method === rolled" text="Rolled" @click="toggleGenMethod(rolled)"/>
        </div>
      </div>
      <div v-if="method === rolled" class="tmh-generation-limits">
        <div>Min:</div>
        <StdInput v-model="minRoll" :value="minRoll" label="Min" type="number"/>
        <div>Max:</div>

        <StdInput v-model="maxRoll" :value="maxRoll" label="Max" type="number"/>
      </div>
      <StdButton buttonStyle="primary" text="Create" @click="randomCharacter"/>
      <div v-if="errMsg" class="tmh-error">{{ errMsg }}</div>
      <div v-if="raceErrMsg" class="tmh-error">{{ raceErrMsg }}</div>
      <div v-if="classErrMsg" class="tmh-error">{{ classErrMsg }}</div>
      <div v-if="loading">Loading</div>
      <div v-if="hasChar" class="tmh-char">
        <div class="tmh-char-name">{{ cName }}</div>
        <div class="tmh-char-race">
          <div class="tmh-char-race-name">
            {{ cRace.name }}
          </div>
          <div class="tmh-char-race-source">
            {{ cRace.source }}
          </div>
        </div>
        <div class="tmh-char-class">
          <div class="tmh-char-class-name">
            {{ subClass }} {{ cClass.name }}
          </div>
          <div class="tmh-char-class-source">
            {{ cClass.source }}
          </div>
        </div>
        <div>
          <div>Character Abilities</div>
          <div class="abilities">
            <div v-for="(v, k) in cAbilities" :key="k" class="ability">
              <div class="ability-title">{{ k }}</div>
              <div class="ability-score">{{ v }}</div>
            </div>
          </div>
        </div>
      </div>

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
import StdInput from "@/components/TextInput";
import CheckBox from "@/components/CheckBox";
import helpers from "@/store/TMH/helpers";

export default {
  name: 'TwoMinuteHeroes',
  components: {CheckBox, StdInput, StdButton},
  data() {
    return {
      loading: false,
      name: null,
      cName: null,
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
      sources: data.allSources(),
      cSources: {},
      showSources: false,
      errMsg: null,
      raceErrMsg: null,
      classErrMsg: null,

      pointBuy: "Point Buy",
      rolled: "Rolled",
      stdArray: "Standard Array",
      method: "Standard Array",

      minRoll: 8,
      maxRoll: 18,
    }
  },
  created() {
  },
  methods: {
    async randomCharacter() {
      this.errMsg = null;
      this.raceErrMsg = null;
      this.classErrMsg = null;
      if (!this.hasChar) {
        this.loading = true;
      }

      if (!this.name || this.name === "") {
        console.log(this.name);
        this.errMsg = "Must provide a name";
        this.loading = false;
        return;
      }

      this.cName = this.name;
      this.cRace = this.randomRace();
      this.cClass = this.randomClass();
      let sc = this.cClass.subclasses;

      this.subClass = sc[Math.floor(Math.random() * sc.length)]
      this.cAbilities = this.genAbilities();

      await new Promise(r => setTimeout(r, 200));
      this.loading = false;
    },
    randomRace() {
      let races = data.allRaces();
      // filter out the ones based on the sources
      const enabled = this.enabledSources();
      console.log(enabled);

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
    toggleGenMethod(m) {
      this.method = m;
    },
    genAbilities() {
      let numbers = [15, 14, 13, 12, 10, 8];
      switch (this.method) {
        case this.rolled:
          numbers = [
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll),
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll),
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll),
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll),
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll),
            helpers.randomIntFromInterval(this.minRoll, this.maxRoll)
          ]
          break;
        case this.pointBuy:
          numbers = [10, 10, 10, 10, 10, 10];
      }

      // use the class and see what is the biggest to smallest
      return helpers.asiFromNumbers(this.cClass, numbers);
    },
    toggleSource(key) {
      this.sources[key] = !this.sources[key];
      this.cSources[key] = !this.cSources[key];
    },
    enabledSources() {
      let enabled = [];
      for (const [key, value] of Object.entries(this.cSources)) {
        console.log(key, value)
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

  &-char {


    &-name {
      margin: auto;
      width: fit-content;
    }

    &-race, &-class {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin: 12px auto;

      &-name {
      }

      &-source {
        font-style: italic;
        font-size: 16px;
        margin: auto 12px;
        color: $font-color-secondary;
      }
    }

    &-class {

    }
  }

  &-error {
    color: $color-red;
  }

  &-generation {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 12px;

    &-options {
      display: flex;
      justify-content: space-evenly;
    }

    &-limits {
      display: flex;
      margin: auto;
      justify-content: center;
    }
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

.sources {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  //height: 0;
  //overflow: hidden;
  transition: $transition-normal;
  margin: 4px;

  &-toggle {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    border: 1px solid $color-primary;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    transition: $transition-normal;
    width: 200px;
    margin: 4px auto;

    &:hover {
      background-color: $color-off-white;
      cursor: pointer;
      border-radius: $radius-medium;
    }
  }

  &-source {
    width: 33%;
    margin: auto;
  }
}
</style>
