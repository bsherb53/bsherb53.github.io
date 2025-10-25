<template>
  <div class="">
    <div class="monster-lvl">
      <div>Level:
        <input type="number" v-model.number="pLevel" @input="validateNumber" class="monster-lvl-input"/>
      </div>
    </div>
    <div class="monsters">
      <PocketMonster v-for="p in pokemons" :key="p.name" :pm="p" :level="pLevel" :small="true"/>
    </div>

  </div>
</template>

<script>

import pkStore from "@/store/PKMonsters/pkStore";
import PocketMonster from "@/components/Pokemon/Monster.vue";

export default {
  name: "PKMonsters",
  components: {PocketMonster},
  data() {
    return {
      pokemons: [],
      pLevel: 10,
    }
  },
  methods: {
    validateNumber() {
      this.pLevel = this.pLevel < 0 ? 0 : this.pLevel;
      this.pLevel = this.pLevel > 20 ? 20 : this.pLevel;

    },
    mod(val) {
      let r = '';
      if (val >= 0) {
        r = "+";
      }

      return r + (val - 10) / 2;
    }
  },
  created() {
    this.pokemons = pkStore.allMonsters();
  },
}
</script>

<style scoped lang="scss">
.monsters{
  display: flex;
  flex-wrap: wrap;
}
.monster-lvl-input {
  font-size: 36px;
  width: 60px;
  padding: 6px;
  text-align: center;
  border-radius: 12px;
}

.mon {
  &-image {
    height: 20px;
    width: 20px;
  }

  &-title {
    font-size: large;
    font-weight: bolder;
  }
}

</style>
