<template>
  <div class="">
    <PocketMonster v-for="p in pokemons" :key="p.name" :pm="p" :hide-level="true"/>

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
    }
  },
  methods: {
    mod(val) {
      let r = '';
      if (val >= 0) {
        r = "+";
      }

      return r + (val-10)/2;
    }
  },
  created() {
    this.pokemons = pkStore.allMonsters();
  },
}
</script>

<style scoped lang="scss">
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
