<template>
  <div>
    <ViewCard>
      <div>
        Events
      </div>
      <div>
        <div v-for="(e,d) in scoresByEvent" :key="e" class="events">
          <div class="events-title">{{ d }}</div>
          <div class="events-list">
            <div v-for="s in e" :key="s" class="events-event">
              <div class="events-event-number">
                {{ s.number }}
              </div>
              <div class="events-event-name">
                <div>{{ s.name }}</div>
                <div class="sub-title">{{ s.team }}</div>
              </div>
              <div class="events-event-score">Score: {{ s.score }}</div>
            </div>
          </div>
        </div>
      </div>
    </ViewCard>
    <!--    <div>-->
    <!--      {{ meet.scores }}-->
    <!--    </div>-->
  </div>
</template>

<script>
import ViewCard from "@/components/Card";

export default {
  name: "GMResults",
  components: {ViewCard},
  props: {
    meet: {
      type: Object,
    },
    score: {
      type: Array,
    }
  },
  methods: {
    lastThreeOfEvent(e) {
      // console.log(e)
      let allScores = this.scoresByEvent;
      // console.log(allScores)
      let eventScores = allScores[e] || [];

      // console.log(eventScores);
      return eventScores;
    },
  },
  computed: {
    scoresByEvent() {
      if (this.meet === null) {
        return {};
      }
      // return this.meet.scores;

      let allScores = {};
      for (const eventsKey in this.meet.events) {
        let eventName = this.meet.events[eventsKey];
        allScores[eventName] = [];
      }
      //
      // console.log('allScores', allScores)
      // console.log(this.meet.scores)
      //
      for (const sKey in this.meet.scores) {
        // console.log(sKey)
        let s = this.meet.scores[sKey];
        allScores[s.event].push(s);
        // console.log('pushing to allScores', s)
      }

      for (const eKey in allScores) {
        let compare = function (a, b) {
          if (a.time < b.time) {
            return -1;
          }
          if (a.time > b.time) {
            return 1;
          }
          return 0;
        }
        allScores[eKey].sort(compare);
      }
      // console.log('allScores2', allScores)

      return allScores;
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-title {
  font-style: italic;
  font-size: 24px;
}

.events {
  display: flex;
  flex-direction: column;

  &-list {
    margin: auto;
    width: 90%;
  }

  &-title {
    font-size: 48px;
  }

  &-event {
    display: flex;
    border: $border-small;
    padding: 4px;
    margin: 4px;
    border-radius: $radius-small;
    justify-content: space-evenly;

    &-name {
      font-size: 48px;
    }

    &-number, &-score {
      margin: auto 4px;
      font-size: 48px;
    }
  }
}
</style>