<template>
  <div class="tmh">
    <div>Welcome to 2 Minute Heroes</div>
    <div>Create a random character</div>
    <StdInput v-model="name" :value="name" hint="What's the name?"/>
    <StdButton buttonStyle="primary" text="Create" @click="randomCharacter"/>

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
          <div class="ability">
            <div class="ability-title">str</div>
            <div class="ability-score">{{ cAbilities.str }}</div>
          </div>
          <div class="ability">
            <div class="ability-title">dex</div>
            <div class="ability-score">{{ cAbilities.dex }}</div>
          </div>
          <div class="ability">
            <div class="ability-title">con</div>
            <div class="ability-score">{{ cAbilities.con }}</div>
          </div>
          <div class="ability">
            <div class="ability-title">int</div>
            <div class="ability-score">{{ cAbilities.int }}</div>
          </div>
          <div class="ability">
            <div class="ability-title">wis</div>
            <div class="ability-score">{{ cAbilities.wis }}</div>
          </div>
          <div class="ability">
            <div class="ability-title">cha</div>
            <div class="ability-score">{{ cAbilities.cha }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tmh-future">
      <div class="tmh-future-title">Future Enhancements</div>
      <div>Quirks/Traits/Bonds/Flaws</div>
      <div>Sizes/Heights/Weights/Traits/Color</div>
      <div>Select Sources</div>
    </div>
  </div>
</template>

<script>
import StdButton from "@/components/Button";
import data from "@/store/TMH/data";
import StdInput from "@/components/TextInput";

export default {
  name: 'TwoMinuteHeroes',
  components: {StdInput, StdButton},
  data() {
    return {
      loading: false,
      name: '',
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
    }
  },
  methods: {
    async randomCharacter() {
      if (!this.hasChar) {
        this.loading = true;
      }

      if (!this.name || this.name === "") {
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
      return races[Math.floor(Math.random() * races.length)];
    },
    randomClass() {
      let classes = data.allClasses()
      let c = classes[Math.floor(Math.random() * classes.length)];
      return c;
    },
    genAbilities() {
      return {
        str: 11,
        dex: 10,
        con: 9,
        int: 15,
        wis: 12,
        cha: 13,
      }
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

  &-future {
    font-size: 12px;
    display: flex;
    justify-content: center;
    flex-direction: column;

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
