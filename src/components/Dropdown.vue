<template>
  <div :tabindex="tabindex" class="custom-select" @blur="open = false">
    <div :class="{ open: open }" class="selected" @click="open = !open">
      {{ selected }}
    </div>
    <div :class="{ selectHide: !open }" class="items">
      <div
          v-for="(option, i) of options"
          :key="i"
          @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "StdDropdown",
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  created() {
    this.selected = this.default
        ? this.default
        : this.options.length > 0
            ? this.options[0]
            : "";
    // console.log('dropdown default', this.selected);
  },
  data() {

    return {
      selected: this.default
          ? this.default
          : this.options.length > 0
              ? this.options[0]
              : null,
      open: false,
    };
  },
  watch: {
    default: function (newVal) { // watch it
      this.selected = newVal;
      this.$emit("input", this.selected)
    }
  },
  mounted() {
    this.$emit("input", this.selected);
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>

.custom-select {
  position: relative;
  text-align: left;
  outline: none;
  height: 40px;
  line-height: 40px;
  background-color: $color-white;
  width: 90%;
  min-width: 100px;
  max-width: 400px;

}

.custom-select .selected {
  background-color: $color-white;
  border-radius: 6px;
  border: $border-small;
  color: $color-black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  transition: $transition-normal;
}

.custom-select .selected.open {
  border: $border-small;
  border-radius: 6px 6px 0px 0px;

  &:after {
    position: absolute;
    content: "";
    top: 40%;
    right: 10px;
    width: auto;
    height: auto;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 15px solid $color-blue-light;
    border-top: 0;
  }
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 40%;
  right: 10px;
  width: auto;
  height: auto;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid $color-blue-light;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: $border-small;
  border-left: $border-small;
  border-bottom: $border-small;
  position: absolute;
  background-color: $color-white;
  left: 0px;
  right: 0px;
  z-index: 1;
}

.custom-select .items div {
  color: $color-blue-light;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div {
  transition: $transition-normal;

  &:hover {
    background-color: $color-gray-light;
  }
}

.selectHide {
  display: none;
}
</style>