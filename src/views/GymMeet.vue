<template>
  <div class="meet">
    Gymnastics Meets
    <GMRun v-if="display" :meet="meet"/>
    <!--    <GMResults v-if=""/>-->
    <GMCreate v-else @fin="setupComplete"/>
  </div>
</template>

<script>
import GMCreate from "@/components/GymMeet/GMCreate";
import GMRun from "@/components/GymMeet/GMRun";

export default {
  name: "GymMeet",
  components: {GMRun, GMCreate},
  data() {
    return {
      meet: null,
    }
  },
  methods: {
    setupComplete(m) {
      console.log('created', m);
      this.meet = m;
    }
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