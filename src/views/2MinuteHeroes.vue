<template>
  <div class="tmh">
    <div>Welcome to 2 Minute Heroes</div>
    <div>Create a random character</div>
    <StdButton style="primary" text="Create" @click="randomCharacter"/>
    <input v-model="cName"/>
    <div>
      <div>{{ cName }}</div>
      <div>{{ cRace }}</div>
      <div>{{ cClass }}</div>
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
      <div>{{ cAbilities }}</div>
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
      cRace: {},
      cClass: '',
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
      this.cAbilities = this.genAbilities();
    },
    randomRace() {
      let races = data.allRaces();
      return races[Math.floor(Math.random() * races.length)];
    },
    randomClass() {
      let classes = data.allClasses()
      return classes[Math.floor(Math.random() * classes.length)];
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
