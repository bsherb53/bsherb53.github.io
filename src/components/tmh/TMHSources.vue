<template>
  <div>
    <StdButton text="Save" @click="saveSources"/>
    <div v-for="(v, i) in sources" :key="i" class="sources-source">
      <CheckBox :text="v" :value="cSources[v]" @changed="toggleSource(v)"/>
    </div>
  </div>
</template>

<script>
import CheckBox from "@/components/CheckBox";
import data from "@/store/TMH/data";
import StdButton from "@/components/Button";

export default {
  name: "TMHSources",
  components: {StdButton, CheckBox},
  props: {
    userSources: {},
  },
  emits: ['saved'],
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
    this.cSources = this.userSources;
  },
  methods: {
    saveSources() {
      // console.log("saving sources", this.cSources);
      this.$emit('saved', this.cSources);
    },
    toggleSource(key) {
      this.sources[key] = !this.sources[key];
      this.cSources[key] = !this.cSources[key];
    },
  }
}
</script>

<style scoped>

</style>