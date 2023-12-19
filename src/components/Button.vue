<template>
  <div :class="classes">{{ text }}</div>
</template>

<script>


export default {
  name: "StdButton",
  data() {
    return {}
  },
  props: {
    buttonStyle: String,
    text: {
      type: String,
      required: true
    },
  },
  created() {
  },
  methods: {},
  computed: {
    classes() {
      let cs = {
        "button": true,

      };
      if (this.buttonStyle) {
        cs["button-" + this.buttonStyle] = true;
      } else {
        cs["button-primary"] = true;
      }

      return cs;
    }
  }

}
</script>

<style lang="scss" scoped>
.button {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  border: 1px solid $color-black;
  width: 100px;
  margin: 12px auto;
  border-radius: $radius-small;
  box-shadow: 2px 2px 4px 0px $color-shadow;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: $color-off-white;
    cursor: pointer;
    border-radius: $radius-medium;
  }

  &-primary {

  }
}
</style>