<template>
  <div class="sources">
    <div class="sources-buttons">
      <div>First, pick your source(s)</div>
      <!--      <div>-->
      <!--        <StdButton text="Select All" @click="selectAll"/>-->
      <!--        <StdButton text="De-Select All" @click="unselectAll"/>-->
      <!--      </div>-->
    </div>
    <div class="sources-data">
      <div v-for="(v, i) in sources" :key="i" class="sources-source">
        <CheckBox :text="v" :value="cSources[v]" @changed="toggleSource(v)"/>
      </div>
    </div>
    <StdButton text="Next" @click="saveSources"/>
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
    if (Object.keys(this.userSources).length === 0) {
      this.toggleSource("Basic Rules");
    }
  },
  methods: {
    saveSources() {
      // console.log("saving sources", this.cSources);
      if (this.hasEnabled) {
        this.$emit('saved', this.cSources);
      }
    },
    toggleSource(key) {
      this.sources[key] = !this.sources[key];
      this.cSources[key] = !this.cSources[key];
      // if (b !== undefined) {
      //   this.sources[key] = b;
      //   this.cSources[key] = b;
      // }
    },
    // selectAll() {
    //   for (const key in this.sources) {
    //     this.toggleSource(this.sources[key], true)
    //   }
    // },
    // unselectAll() {
    //   for (const key in this.sources) {
    //     this.toggleSource(this.sources[key], false)
    //   }
    // }
  },
  computed: {
    hasEnabled() {
      let enabled = [];
      for (const [key, value] of Object.entries(this.cSources)) {
        // console.log(key, value)
        if (value === true) {
          enabled.push(key)
        }
      }
      return enabled.length > 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.sources {
  display: flex;
  flex-direction: column;
  transition: $transition-normal;

  &-buttons {

  }

  &-data {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &-source {
    font-size: 18px;
    margin: $margin-small;
  }
}
</style>