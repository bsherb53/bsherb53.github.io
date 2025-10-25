<template>
  <div>
    <div v-if="!selectedName">
      <div>Your character has morphed. Please select your name</div>
      <select class="selector" @change="handleChange" v-model="selectedName">
        <option :key="o.player" v-for="o in options" :value="o.player">{{ o.player }} / {{ o.character }}</option>
      </select>
    </div>
    <div v-else-if="character && pokemon">
      <div class="title">{{ character.character }} has morphed into a {{ pokemon.name }}</div>
      <div class="title-sub">{{ character.player }}</div>
      <div class="monster-lvl">
        <div>Level:
          <input type="number" v-model.number="pLevel" @input="validateNumber" class="monster-lvl-input"/>
        </div>
      </div>
      <PocketMonster :pm="pokemon" :level="pLevel"/>
    </div>
    <div @click="reset" class="reset">Reset</div>
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
      this.pLevel = Number(lvl);
    }

    let c = window.localStorage.getItem("character");
    if (c !== null) {
      this.selectedName = c; // this is first for playerCharacter
      this.character = this.playersCharacter;
      this.pokemon = pkStore.getPokemon(c);
    }
    // console.log("lvl", this.pLevel)
    // console.log("name", this.selectedName)
    // console.log("pokemon", this.pokemon)
    // console.log("character", this.character)
  },
  methods: {
    validateNumber() {
      // Validation logic will go here
      this.pLevel = this.pLevel < 0 ? 0 : this.pLevel;
      this.pLevel = this.pLevel > 20 ? 20 : this.pLevel;

      window.localStorage.setItem("level", this.pLevel);

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

.monster-lvl-input {
  font-size: 36px;
  width: 60px;
  padding: 6px;
  text-align: center;
  border-radius: 12px;
}

.reset {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  padding: 8px;
  font-size: 36px;
  color: $color-off-white;

  &:hover {
    cursor: pointer;
  }
}

.title {
  margin: 4px;
  text-decoration: underline;

  &-sub {
    font-style: italic;
    color: grey;
  }
}
</style>