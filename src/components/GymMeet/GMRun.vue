<template>
  <div class="meet-run">
    <div>Name: {{ meet.name }}</div>
    <div>Date: {{ meetDate }}</div>
    <ViewCard>
      <div class="meet-run-row border-bottom">
        <div>
          Event
        </div>
        <div>
          Team
        </div>
        <div>
          Gymnast
        </div>
        <div>
          Score
        </div>
        <div/>
      </div>
      <div class="meet-run-row">
        <StdDropdown :options="events" @input="chooseEvent"/>
        <StdDropdown :options="teams" @input="chooseTeam"/>
        <StdDropdown :default="firstGymnast" :options="gymnasts" @input="chooseGymnast"/>
        <StdInput v-model="gymnastScore" :max="10" :min="0" :value="gymnastScore" step=".001" type="number"/>
        <StdButton text="Add" @click="addScore"/>
      </div>
    </ViewCard>
  </div>
</template>

<script>
import StdDropdown from "@/components/Dropdown";
import StdInput from "@/components/TextInput";
import StdButton from "@/components/Button";
import ViewCard from "@/components/Card";

export default {
  name: "GMRun",
  components: {ViewCard, StdButton, StdInput, StdDropdown},
  props: {
    meet: {
      type: Object,
      required: true,
    }
  },
  emits: ['score'],
  data() {
    return {
      data: this.meet,
      selectedEvent: null,
      selectedTeam: null,
      selectedGymnast: null,
      gymnastScore: null,

      gymnasts: [],
      // scores: [],
    }
  },
  created() {
    this.data.scores = [];
  },
  methods: {
    updateGymnastScore(score) {
      console.log('updating gymnast', score);
      for (const i in this.data.gymnasts) {
        let g = this.data.gymnasts[i];
        if (g.name === score.name && g.team === score.team) {
          return g;
        }
      }
    },
    addScore() {
      if (this.gymnastScore <= 0 || this.gymnastScore > 10) {
        this.gymnastScore = null;
        return;
      }

      let score = this.currentGymnast;
      score['score'] = this.gymnastScore;
      score['event'] = this.selectedEvent;
      this.data.scores.push(score);
      this.$emit("score", score);
      this.gymnastScore = null;
      // this.updateGymnastScore(score);
    },
    chooseEvent(d) {
      this.selectedEvent = d;
    },
    chooseTeam(d) {
      this.selectedTeam = d;
      // refresh the list of gymnasts
      this.selectedGymnast = null;
      this.populateGymnasts();
    },
    chooseGymnast(d) {
      this.selectedGymnast = d;
    },
    populateGymnasts() {
      let t = this.selectedTeam;
      let g = this.data.gymnasts.filter(function (el) {
        return el.team === t;
      });

      let gymList = [];
      for (const gKey in g) {
        let gm = g[gKey];
        // console.log(gm)
        gymList.push(gm.name);
      }
      this.gymnasts = gymList.sort();
    }
  },
  computed: {
    meetDate() {
      let d = new Date(this.data.date)
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    },
    currentGymnast() {
      for (const i in this.data.gymnasts) {
        let g = this.data.gymnasts[i];
        if (g.name === this.selectedGymnast && g.team === this.selectedTeam) {
          return g;
        }
      }
      return {
        name: '',
        team: '',
      }
    },
    events() {
      let e = this.data.events;
      return e.sort()
    },
    teams() {
      let e = this.data.teams;
      return e.sort()
    },
    firstGymnast() {
      // console.log(this.gymnasts);
      return this.gymnasts.length > 0 ? this.gymnasts[0] : "Select";
    }
  },
}
</script>

<style lang="scss" scoped>
.border-bottom {
  border-bottom: $border-small;
}

.meet-run {
  &-row {
    display: flex;
    justify-content: space-around;

    & div {
      margin: 4px;
    }
  }
}
</style>