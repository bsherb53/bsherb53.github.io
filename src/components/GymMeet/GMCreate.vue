<template>
  <div>
    Let's create a meet
    <StdButton v-if="page > 1" text="Back" @click="back"/>

    <div v-if="page === 1">
      <div>Meet Name</div>
      <StdInput v-model="meet.name" :value="meet.name"/>
      <div>Meet Date</div>
      <DatePicker v-model="meetDate" :value="meetDate"/>
      <StdButton :disabled="!canCreate" text="Create" @click="addedMeetInfo"/>
    </div>
    <div v-else-if="page ===2">
      Add Events
      <div class="meet-create-add-events">
        <StdInput v-model="tempEventName" :value="tempEventName"/>
        <StdButton text="Add" @click="addEvent"/>
      </div>
      <div v-for="e in meet.events" :key="e" class="meet-create-add-events">
        <div>{{ e }}</div>
        <StdButton text="Delete" @click="deleteEvent(e)"/>
      </div>
      <StdButton text="Done" @click="addedEvents"/>
    </div>
    <div v-else-if="page ===3">
      Add Teams
      <StdButton text="Done" @click="addedTeams"/>
    </div>
    <div v-else-if="page ===4">
      Add Gymnasts
      <StdButton text="Finish and Run" @click="addedGymnasts"/>
    </div>
  </div>
</template>

<script>
import StdButton from "@/components/Button";
import StdInput from "@/components/TextInput";
import DatePicker from "@/components/DatePicker";

export default {
  name: "GMCreate",
  components: {DatePicker, StdInput, StdButton},
  emits: ['fin'],
  data() {
    return {
      meetDate: null,
      tempEventName: null,
      meet: {
        name: '',
        test: 'data',
        events: ['Vault', 'Beam', 'Bars', 'Floor'],
      },
      page: 1,
    }
  },
  created() {

  },
  methods: {
    addEvent() {
      this.meet.events.push(this.tempEventName);
      this.tempEventName = null;
    },
    deleteEvent(n) {
      // Find the index of the item to remove
      const index = this.meet.events.indexOf(n);

// Remove the item at the specified index
      this.meet.events.splice(index, 1);
    },
    addedMeetInfo() {
      // console.log(this.meetDate)
      this.meet.date = this.meetDate;
      this.$emit('fin', this.meet);
      this.page++;
    },
    addedEvents() {
      this.page++;
    },
    addedTeams() {
      this.page++;
    },
    addedGymnasts() {
      this.page++;
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
.meet-create-add-events {
  display: flex;
}
</style>