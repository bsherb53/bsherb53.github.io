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
  mounted() {
    this.$emit("input", this.selected);
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: $color-off-white;
  border-radius: 6px;
  border: $border-small;
  color: $color-black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: $border-small;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: $border-small;
  border-left: $border-small;
  border-bottom: $border-small;
  position: absolute;
  background-color: $color-off-white;
  left: 0;
  right: 0;
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