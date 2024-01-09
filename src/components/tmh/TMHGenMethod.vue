<template>
  <div class="tmh-generation">
    <div>Now pick the Generation Method</div>
    <div class="subtitle">Note: Point Buy you must do on your own</div>
    <div class="tmh-generation-options">
      <CheckBox :value="method === stdArray" class="tmh-generation-options-b" text="Standard Array"
                @click="changedMethod(stdArray)"/>
      <!--      <CheckBox :value="method === pointBuy" text="Point Buy" @click="changedMethod(pointBuy)"/>-->
      <CheckBox :value="method === rolled" class="tmh-generation-options-b" text="Rolled"
                @click="changedMethod(rolled)"/>
    </div>
    <div v-if="method === rolled" class="tmh-generation-limits">
      <div>Min:</div>
      <StdInput v-model="minRoll" :value="minRoll" label="Min" type="number"/>
      <div>Max:</div>

      <StdInput v-model="maxRoll" :value="maxRoll" label="Max" type="number"/>
    </div>
    <StdButton text="Next" @click="saveMethod"/>
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
    min: {},
    max: {},
  },
  emits: ['saved', 'changed'],
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
    if (this.min) {
      this.minRoll = this.min;
    }
    if (this.max) {
      this.maxRoll = this.max;
    }
  },
  methods: {
    saveMethod() {
      console.log("saved method to ", this.method);
      this.$emit('saved', this.method, this.minRoll, this.maxRoll);
    },
    changedMethod(m) {
      console.log("changed method to ", m);
      this.method = m;
      this.emitChange();
    },
    emitChange() {
      console.log("changed generation method");
      this.$emit('changed', this.method, this.minRoll, this.maxRoll);
    }
  },
  watch: {
    minRoll() {
      this.emitChange();
    },
    maxRoll() {
      this.emitChange();
    }
  },
}
</script>

<style lang="scss" scoped>
.tmh-generation {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;


  &-options {
    display: flex;
    justify-content: center;

    &-b {
      margin: $margin-small;
    }
  }

  &-limits {
    display: flex;
    margin: $margin-medium auto;
    justify-content: center;
  }
}

</style>