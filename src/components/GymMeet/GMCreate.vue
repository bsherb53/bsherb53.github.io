<template>
  <ViewCard>
    <StdButton v-if="page > 1" text="Back" @click="back"/>
    <div v-if="page === pageInfo">
      <div>Meet Name</div>
      <StdInput v-model="meet.name" :value="meet.name"/>
      <div>Meet Date</div>
      <DatePicker v-model="meetDate" :value="meetDate"/>
      <StdButton :disabled="!canCreate" text="Create" @click="addedMeetInfo"/>
    </div>
    <div v-else-if="page ===pageEvents">
      Add Events
      <div v-for="(e, i) in meet.events" :key="e" :class="{'odd-row':i % 2 === 0 }" class="meet-create-add-events">
        <div class="meet-create-add-events-item">{{ e }}</div>
        <StdButton button-style="delete" text="Delete" @click="deleteEvent(e)"/>
      </div>
      <div class="meet-create-add-events">
        <StdInput v-model="tempEventName" :value="tempEventName" class="meet-create-add-events-item" @enter="addEvent"/>
        <StdButton text="Add" @click="addEvent"/>
      </div>
      <StdButton text="Done" @click="addedEvents"/>
    </div>
    <div v-else-if="page ===pageLevels">
      Add Levels
      <div v-for="(e, i) in meet.levels" :key="e" :class="{'odd-row':i % 2 === 0 }" class="meet-create-add-events">
        <div class="meet-create-add-events-item">{{ e }}</div>
        <StdButton button-style="delete" text="Delete" @click="deleteLevel(e)"/>
      </div>
      <div class="meet-create-add-events">
        <StdInput v-model="tempLevelName" :value="tempLevelName" class="meet-create-add-events-item" @enter="addLevel"/>
        <StdButton text="Add" @click="addLevel"/>
      </div>
      <StdButton text="Done" @click="addedLevels"/>
    </div>
    <div v-else-if="page ===pageTeams">
      Add Teams
      <div v-for="(e, i) in meet.teams" :key="e" :class="{'odd-row':i % 2 === 0 }" class="meet-create-add-events">
        <div class="meet-create-add-events-item">{{ e }}</div>
        <StdButton button-style="delete" text="Delete" @click="deleteTeam(e)"/>
      </div>
      <div class="meet-create-add-events">
        <StdInput v-model="tempTeamName" :value="tempTeamName" class="meet-create-add-events-item" @enter="addTeam"/>
        <StdButton text="Add" @click="addTeam"/>
      </div>
      <StdButton text="Done" @click="addedTeams"/>
    </div>
    <div v-else-if="page ===pageGymnasts">
      Add Gymnasts
      <div class="meet-create-add-events">
        <div class="meet-create-add-events-item">Team</div>
        <StdDropdown :options="meet.teams" @input="selectedTeam"/>
        <div class="meet-create-add-events-item">Level</div>
        <StdDropdown :options="meet.levels" @input="selectedLevel"/>
        <div class="meet-create-add-events-item">Name</div>
        <div class="meet-create-add-events-item">
          <StdInput v-model="tempKidName" :value="tempKidName" class="meet-create-add-events-item" @enter="addGymnast"/>
          <StdButton text="Add" @click="addGymnast"/>
        </div>
      </div>
      <div v-for="(e, i) in meet.gymnasts" :key="e" :class="{'odd-row':i % 2 === 0 }" class="meet-create-view-events">
        <div class="meet-create-view-events-item">{{ e.team }}</div>
        <div class="meet-create-view-events-item">{{ e.level }}</div>
        <div class="meet-create-view-events-item">{{ e.name }}</div>
        <StdButton button-style="delete" text="Delete" @click="deleteTeam(e)"/>
      </div>
      <StdButton text="Finish and Run" @click="saveMeet"/>
    </div>
  </ViewCard>
</template>

<script>
import StdButton from "@/components/Button";
import StdInput from "@/components/TextInput";
import DatePicker from "@/components/DatePicker";
import ViewCard from "@/components/Card";
import StdDropdown from "@/components/Dropdown";

export default {
  name: "GMCreate",
  components: {StdDropdown, ViewCard, DatePicker, StdInput, StdButton},
  emits: ['fin'],
  data() {
    return {
      pageInfo: 1,
      pageEvents: 2,
      pageLevels: 3,
      pageTeams: 4,
      pageGymnasts: 5,

      meetDate: null,

      tempEventName: null,
      tempTeamName: null,
      tempLevelName: null,

      tempKidName: null,
      tempKidTeam: null,
      tempKidLevel: null,

      meet: {
        name: '',
        events: ['Vault', 'Beam', 'Bars', 'Floor'],
        teams: [],
        levels: [],
        gymnasts: [],
      },
      page: 1,
    }
  },
  created() {
    // this.page = this.pageGymnasts;
  },
  methods: {
    addedMeetInfo() {
      // console.log(this.meetDate)
      this.meet.date = this.meetDate;
      this.page++;
    },

    addEvent() {
      if (this.meet.events.includes(this.tempEventName)) {
        return;
      }
      this.meet.events.push(this.tempEventName);
      this.tempEventName = null;
    },
    deleteEvent(n) {
      // Find the index of the item to remove
      const index = this.meet.events.indexOf(n);
      // Remove the item at the specified index
      this.meet.events.splice(index, 1);
    },
    addedEvents() {
      this.page++;
    },

    addedTeams() {
      this.page++;
    },
    addTeam() {
      if (this.meet.teams.includes(this.tempTeamName)) {
        return;
      }
      this.meet.teams.push(this.tempTeamName);
      this.tempTeamName = null;
    },
    deleteTeam(n) {
      // Find the index of the item to remove
      const index = this.meet.teams.indexOf(n);
      // Remove the item at the specified index
      this.meet.teams.splice(index, 1);
    },

    addedLevels() {
      this.page++;
    },
    addLevel() {
      if (this.meet.levels.includes(this.tempLevelName)) {
        return;
      }
      this.meet.levels.push(this.tempLevelName);
      this.tempLevelName = null;
    },
    deleteLevel(n) {
      // Find the index of the item to remove
      const index = this.meet.levels.indexOf(n);
      // Remove the item at the specified index
      this.meet.levels.splice(index, 1);
    },

    saveMeet() {
      this.$emit('fin', this.meet);
    },
    addGymnast() {
      if (this.meet.gymnasts.includes(this.tempKidName)) {
        return;
      }

      // generate number
      const index = this.meet.levels.indexOf(this.tempKidLevel);
      const number = ((index + 1) * 100) + this.meet.gymnasts.length;

      let g = {
        number: number,
        name: this.tempKidName,
        level: this.tempKidLevel,
        team: this.tempKidTeam,
      }
      this.meet.gymnasts.push(g);
      this.tempKidName = null;
      // this.tempKidLevel = null;
      // this.tempKidTeam = null;
    },
    deleteGymnast(n) {
      // Find the index of the item to remove
      const index = this.meet.gymnasts.indexOf(n);
      // Remove the item at the specified index
      this.meet.gymnasts.splice(index, 1);
    },

    selectedTeam(t) {
      this.tempKidTeam = t;
    },
    selectedLevel(l) {
      this.tempKidLevel = l;
    },

    back() {
      if (this.page > 1) {
        this.page--;
      }
    }
  },
  computed: {
    canCreate() {
      return this.meet.name && this.meetDate;
    }
  }
}
</script>

<style lang="scss" scoped>

.meet-create-view-events{
  display: flex;
  margin: auto;
  &-item {
    margin: auto 4px;
    padding: 10px;
    width: 60%;
    font-size: 24px;
    display: flex;
  }
}

.meet-create-add-events {
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;

  &-item {
    margin: auto 4px;
    padding: 10px;
    width: 60%;
    font-size: 24px;
    display: flex;
  }
}

.odd-row {
  background-color: $color-gray-light;
}
</style>