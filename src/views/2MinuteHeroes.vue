<template>
  <div class="tmh">
    <div>Welcome to 2 Minute Heroes</div>
    <div>Create a random character</div>
    <input v-model="cName"/>
    <StdButton buttonStyle="primary" text="Create" @click="randomCharacter"/>

    <div class="tmh-char">
      <div class="tmh-char-name">{{ cName }}</div>
      <div v-if="cRace" class="tmh-char-race">
        <div class="tmh-char-race-name">
          {{ cRace.name }}
        </div>
        <div class="tmh-char-race-source">
          {{ cRace.source }}
        </div>
      </div>
      <div v-if="cClass" class="tmh-char-class">
        <div class="tmh-char-class-name">
          {{ cClass.name }}: {{ subClass }}
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
  </div>
</template>

<script>
import StdButton from "@/components/Button";
import data from "@/store/TMH/data";

export default {
  name: 'TwoMinuteHeroes',
  components: {StdButton},
  data() {
    return {
      cName: '',
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
    randomCharacter() {
      this.cRace = this.randomRace();
      this.cClass = this.randomClass();
      let sc = this.cClass.subclasses;

      this.subClass = sc[Math.floor(Math.random() * sc.length)]
      this.cAbilities = this.genAbilities();
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
        color: $color-grey;
      }
    }

    &-class {

    }
  }
}

.abilities {
  display: flex;
  justify-content: space-evenly;
  margin: auto;
}

.ability {
  &-title {
    text-transform: uppercase;
  }
}
</style>
