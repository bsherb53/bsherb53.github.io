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
    disabled: Boolean,
  },
  created() {
    console.log(this.disabled)
  },
  methods: {},
  computed: {
    classes() {
      let cs = {
        "button": true,
      };
      if (this.disabled) {
        return {
          "button": true,
          "button-disabled": this.disabled,
        };
      }

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
  min-width: 100px;
  width: fit-content;
  margin: 12px auto;
  border-radius: $radius-small;
  box-shadow: 2px 2px 4px 0px $color-shadow;
  transition: $transition-normal;
  padding: $padding-medium;

  &:hover {
    cursor: pointer;
    border-radius: $radius-medium;
  }

  &:active {
  }

  &-disabled {
    color: red !important;
    pointer-events: none;
  }

  &-primary {
    background-color: $color-primary;
    color: $color-secondary;

    &:hover {
      background-color: $color-light-blue;
    }

    &:active {
      color: $color-primary;
      background-color: $color-off-white;
    }
  }

  &-secondary {
    background-color: $color-green;
    color: $color-off-white;

    &:hover {
      background-color: $color-teal;
    }

    &:active {
      background-color: $color-off-white;
      color: $color-green;
    }
  }

  &-trinary {
    background-color: $color-green;
    color: $color-off-white;

    &:hover {
      background-color: $color-teal;
    }

    &:active {
      background-color: $color-off-white;
      color: $color-green;
    }
  }
}
</style>