<template>
  <div class="meet">
    Gymnastics Meets
    <GMRun v-if="display" :meet="meet" @fin="meetOver" @score="scoresUpdated"/>
    <!--    <GMResults v-if=""/>-->
    <GMCreate v-else @fin="setupComplete"/>
    <GMResults :meet="meet"/>
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
      // meet: {
      //   name: '',
      //   date: new Date(),
      //   events: ['Vault', 'Beam', 'Bars', 'Floor'],
      //   teams: ['Elite', 'Twisters', 'Pinnacle'],
      //   levels: ['Bronze', 'Silver', 'Gold'],
      //   gymnasts: [
      //     {number: 101, name: 'Shantell', team: 'Elite', level: 'Bronze'},
      //     {number: 201, name: 'Pardune', team: 'Elite', level: 'Silver'},
      //     {number: 301, name: 'Someone', team: 'Elite', level: 'Gold'},
      //     {number: 102, name: 'Somebody', team: 'Twisters', level: 'Bronze'},
      //     {number: 202, name: 'Peabody', team: 'Twisters', level: 'Silver'},
      //     {number: 302, name: 'Penelope', team: 'Twisters', level: 'Gold'},
      //     {number: 103, name: 'Gus', team: 'Pinnacle', level: 'Bronze'},
      //     {number: 203, name: 'Sam', team: 'Pinnacle', level: 'Silver'},
      //     {number: 303, name: 'BooBoo', team: 'Pinnacle', level: 'Gold'},
      //   ],
      // },
      meet: null,
    }
  },
  methods: {
    setupComplete(m) {
      console.log('created', m);
      this.meet = m;
    },
    scoresUpdated(s) {
      // go through and make sure that it isn't a duplicate
      let found = false;
      console.log(this.meet.scores)
      for (const sKey in this.meet.scores) {
        let score = this.meet.scores[sKey];
        console.log('score', score);
        console.log('s', s)
        if (score.number === s.number && score.event === s.event) {
          // update instead of push
          this.meet.scores[sKey].time = s.time;
          this.meet.scores[sKey].score = s.score;
          found = true;
          console.log('updated score', s);
          break;
        }
      }
      if (!found) {
        this.meet.scores.push(s);
        console.log('adding score', s)
      }
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