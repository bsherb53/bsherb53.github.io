<template>
  <div class="meet">
    Gymnastics Meets
    <GMRun v-if="display" :meet="meet" @fin="meetOver" @score="scoresUpdated"/>
    <!--    <GMResults v-if=""/>-->
    <GMCreate v-else @fin="setupComplete"/>
    <GMResults :score="meetScores"/>
  </div>
</template>

<script>
import GMCreate from "@/components/GymMeet/GMCreate";
import GMRun from "@/components/GymMeet/GMRun";
import GMResults from "@/components/GymMeet/GMResults";

export default {
  name: "GymMeet",
  components: {GMResults, GMRun, GMCreate},
  data() {
    return {
      meet: null,
      meetScores: [],
    }
  },
  methods: {
    setupComplete(m) {
      console.log('created', m);
      this.meet = m;
    },
    scoresUpdated(s) {
      console.log('updated scores', s)
    },
    meetOver(s) {
      console.log(s)
    },
  },
  computed: {
    display() {
      return this.meet !== null;
    }
  }
}
</script>

<style lang="scss" scoped>
.meet {
  width: 66%;
  margin: 0 auto;
}
</style>