<template>
  <div class="tmh-generation">
    <div>Generation Method</div>
    <div class="tmh-generation-options">
      <CheckBox :value="method === stdArray" text="Standard Array" @click="toggleGenMethod(stdArray)"/>
      <CheckBox :value="method === pointBuy" text="Point Buy" @click="toggleGenMethod(pointBuy)"/>
      <CheckBox :value="method === rolled" text="Rolled" @click="toggleGenMethod(rolled)"/>
    </div>
    <div v-if="method === rolled" class="tmh-generation-limits">
      <div>Min:</div>
      <StdInput v-model="minRoll" :value="minRoll" label="Min" type="number"/>
      <div>Max:</div>

      <StdInput v-model="maxRoll" :value="maxRoll" label="Max" type="number"/>
    </div>
    <StdButton text="Save" @click="saveMethod"/>
  </div>
</template>

<script>
import CheckBox from "@/components/CheckBox";
import StdInput from "@/components/TextInput";
import StdButton from "@/components/Button";

export default {
  name: "TMHGenMethod",
  components: {StdButton, StdInput, CheckBox},
  props: {
    choice: {},
  },
  emits: ['saved'],
  data() {
    return {
      pointBuy: "Point Buy",
      rolled: "Rolled",
      stdArray: "Standard Array",

      method: "Standard Array",

      minRoll: 8,
      maxRoll: 18,
    };
  },
  created() {
    if (this.choice !== "") {
      this.method = this.choice;
    }
  },
  methods: {
    saveMethod() {
      this.$emit('saved', this.method, this.minRoll, this.maxRoll);
    },
    toggleGenMethod(m) {
      this.method = m;
    },
  },
}
</script>

<style scoped>

</style>