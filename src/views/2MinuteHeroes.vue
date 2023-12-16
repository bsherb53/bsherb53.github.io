<template>
  <div class="tmh">
    <div>Welcome to 2 Minute Heroes</div>
    <div>Create a random character</div>
    <div @click="createChar">Create</div>
    <input v-model="cName"/>
    <div>
      <div>{{ cName }}</div>
      <div>{{ cRace }}</div>
      <div>{{ cClass }}</div>
      <div>{{ cAbilities }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoMinuteHeroes',
  data() {
    return {
      cName: '',
      cRace: '',
      cClass: '',
      cAbilities: {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
      },
    }
  },
  methods: {
    createChar() {
      this.cRace = this.randomRace();
      this.cClass = this.randomClass();
      this.cAbilities = this.genAbilities();
    },
    randomRace() {
      let races = ['Wood Elf', 'High Elf', 'Eladrin', 'Tiefling', 'Leonin', 'Dwarf', 'Gnome', 'Human',
        'Variant Human', 'Kenku', 'Changeling'];
      return races[Math.floor(Math.random() * races.length)];
    },
    randomClass() {
      let classes = ['Artificer', 'Barbarian', 'Rogue', 'Fighter', 'Wizard', 'Warlock', 'Druid', 'Sorcerer',
        'Cleric', 'Bard'];
      return classes[Math.floor(Math.random() * classes.length)];
    },
    genAbilities() {
      return {
        str: 11,
        dex: 10,
        con: 9,
        int: 15,
        wis: 12,
        cha: 13,
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
