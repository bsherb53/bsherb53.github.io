<template>
  <div class="meet">
    Gymnastics Meets
    <GMCreate @fin="created"/>
  </div>
</template>

<script>
import GMCreate from "@/components/GymMeet/GMCreate";

export default {
  name: "GymMeet",
  components: {GMCreate},
  methods: {
    created(m) {
      console.log('created', m);
    }
  }
}
</script>

<style scoped>

</style>