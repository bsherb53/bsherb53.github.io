<template>
  <input v-model="content" :class="classes" :placeholder="hint" type="text"/>
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
    "hint": {}
  },
  emits: ['changed'],
  created() {

    this.debouncedFetch = helpers.debounce((newValue) => {
      this.loading = false;
      this.$emit('changed', newValue);
    }, 400);
  },
  data() {
    return {
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