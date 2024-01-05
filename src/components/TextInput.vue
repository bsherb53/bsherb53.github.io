<template>
<!--  <div class="input-box">-->
<!--    <div v-if="label" class="input-box-label">{{ label }}:</div>-->
    <input v-model="content" :class="classes" :placeholder="hint" :type="inputType" min="0" max="20"/>
<!--  </div>-->
</template>

<script>

import helpers from "@/store/TMH/helpers";

export default {
  name: "StdInput",
  props: {
    'value': {},
    "showLoading": {},
    inputStyle: {
      type: String,
      description: 'UX defined styling of a button',
      default: 'primary',
      options: [
        'primary', 'narrow', 'outline', 'hidden',
      ],
    },
    "hint": {},
    "label": {},
    "type": {},
  },
  emits: ['changed'],
  created() {
    if (this.type !== undefined) {
      this.inputType = this.type;
    }
    // console.log(this.inputType)

    this.debouncedFetch = helpers.debounce((newValue) => {
      this.loading = false;
      this.$emit('changed', newValue);
    }, 400);
  },
  data() {
    return {
      inputType: 'text',
      content: this.value,
      loading: false,
    };
  },
  watch: {
    content(n, o) {
      this.loading = true;
      this.debouncedFetch(n, o);
    },
    value(n) {
      // console.log("changed test")
      this.content = n;
      // this.loading = true;
      // this.debouncedFetch(n, o);
    }
  },
  computed: {
    classes() {
      return {
        'input': true,
        'input--primary': !this.inputStyle,
        [`input-${this.inputStyle}`]: this.inputStyle,
        [`input-${this.inputStyle}`]: this.inputStyle,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  &-box {
    display: flex;
    justify-content: space-between;
    margin: 4px;

    &-label {
      margin: 4px;
    }
  }

  &-primary {
    padding: 6px;
    border-radius: $radius-small;
    border: 1px solid $color-primary;
    font-size: 16px;
  }

  &-narrow {
    padding: 2px;
    border-radius: $radius-medium;
    font-size: 16px;
    border: none;
    width: 50px;
    background: $color-white;
    text-align: center;
    margin: 0 auto;
  }
}
</style>