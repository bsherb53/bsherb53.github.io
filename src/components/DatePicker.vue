<template>
  <input type="date" v-model="data"/>
<!--  <date-picker/>-->
</template>

<script>
export default {
  name: "DatePicker",
  props:{
    value:{},
  },
  data(){
    return {
      data:null,
    }
  },
  created(){
    this.data = this.value;
  }
}
</script>

<style lang="scss" scoped>
[type="date"] {
  background: $color-white url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 99% 50% no-repeat;
  border: 1px solid $color-blue;
  border-radius: 5px;
  padding: 4px;
  box-shadow: $shadow-small;
}

[type="date"]::-webkit-inner-spin-button {
  display: none;
}

[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}
</style>