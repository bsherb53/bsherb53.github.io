<template>
  <div>
    <div>Create a Random D&D 5e Character!</div>
    <div>Random Name by fantasy name generator?</div>
    <div>Random Race</div>
    <input v-model="name"/>{{ name }}
    <div>Random Class</div>
    <div>Ability Scores (Min/Max), Point Buy, Roll, Standard Array</div>
    {{ races }}
    {{ classes }}
  </div>
</template>

<script>
import {allClasses, allRaces} from "@/scripts/store";

export default {
  name: "MinuteHero",
  data() {
    return {
      name: '',
      race: '',
      class: '',

      races: null,
      classes: null,
    }
  },
  created() {
    this.races = allRaces();
    this.classes = allClasses();
  }
}
</script>

<style scoped>

</style>