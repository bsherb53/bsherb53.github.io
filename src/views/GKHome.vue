<template>
  <div>
    <div v-if="!selectedName">
      <div>Your character has morphed. Please select your name</div>
      <select class="selector" @change="handleChange" v-model="selectedName">
        <option :key="o.player" v-for="o in options" :value="o.player">{{ o.player }} / {{ o.character }}</option>
      </select>
    </div>
    <div v-else>
      <div>{{ character.character }}</div>
      <div>played by {{ character.player }}</div>
      <div class="monster-lvl" v-if="!hideLevel">
        <div>Level:</div>
        <input type="number" v-model.number="pLevel" @input="validateNumber"/>
      </div>
      <PocketMonster :p="pokemon" :level="pLevel"/>
    </div>
    <div @click="reset">Reset</div>
  </div>
</template>

<script>

import pkStore from "@/store/PKMonsters/pkStore";
import PocketMonster from "@/components/Pokemon/Monster.vue";

export default {
  name: "GKHome",
  components: {PocketMonster},
  data() {
    return {
      selectedName: null,
      character: null,
      pokemon: null,
      pLevel: 10,
      options: [
        {
          player: "Kevin",
          character: "Eddy",
          id: 1,
          level: 10,
        },
        {
          player: "Tyson",
          character: "Larry",
          id: 2,
          level: 10,
        },
        {
          player: "Jarrad",
          character: "Grillz",
          id: 3,
          level: 10,
        },
        {
          player: "Carson",
          character: "Shellwyn",
          id: 4,
          level: 10,
        },
        {
          player: "Lance",
          character: "Omadinq",
          id: 5,
          level: 10,
        },
        {
          player: "Roger",
          character: "Mr. Ed",
          id: 6,
          level: 10,
        }
      ]
    }
  },
  created() {
    let lvl = window.localStorage.getItem("level");
    if (lvl !== null) {
      this.pLevel = lvl;
    }

    let c = window.localStorage.getItem("character");
    if (c !== null) {
      this.selectedName = c;
      this.character = this.playersCharacter;
      this.pokemon = pkStore.getPokemon(this.selectedName);
    }
  },
  methods: {
    validateNumber() {
      // Validation logic will go here
      this.pLevel = this.pLevel < 0 ? 0 : this.pLevel;
      this.pLevel = this.pLevel > 20 ? 20 : this.pLevel;
    },
    handleChange(event) {
      this.selectedName = event.target.value;
      this.character = this.playersCharacter;
      this.pokemon = pkStore.getPokemon(this.selectedName);
      window.localStorage.setItem("character", this.selectedName);
    },
    reset() {
      this.selectedName = null;
      this.character = null;
      this.pokemon = null;
      window.localStorage.clear();
    }
  },
  computed: {
    playersCharacter() {
      for (const k in this.options) {
        if (this.selectedName === this.options[k].player) {
          return this.options[k];
        }
      }
      return null;
    }
  }
}
</script>

<style scoped lang="scss">
.selector {
  max-width: 350px;
  height: 50px;
  font-size: 36px;
}
</style>