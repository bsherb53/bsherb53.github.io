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
  /* border: 1px solid black; */
  width: 100px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0px $color-shadow;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }

  &-primary {

  }
}
</style>