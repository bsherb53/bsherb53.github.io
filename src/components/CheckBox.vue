<template>
  <div :class="classes" @click="toggle">
    <input v-model="content" type="checkbox">
    <div class="checkbox-text">{{ text }}</div>
  </div>
</template>

<script>
import helpers from "@/store/TMH/helpers";

export default {
  name: "CheckBox",
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
    "text": {},
  },
  emits: ['changed'],
  created() {
    this.debouncedFetch = helpers.debounce((newValue) => {
      this.loading = false;
      this.$emit('changed', newValue);
    }, 10);
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
  methods: {
    toggle() {
      this.content = !this.content;
    }
  },
  computed: {
    classes() {
      return {
        'checkbox': true,
        'checkbox--primary': !this.inputStyle,
        [`checkbox-${this.inputStyle}`]: this.inputStyle,
        [`checkbox-${this.inputStyle}`]: this.inputStyle,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  display: flex;
  border: 1px solid $color-primary;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
  transition: $transition-normal;
  min-width: 150px;

  &:hover {
    background-color: $color-off-white;
    cursor: pointer;
    border-radius: $radius-medium;
  }

  &-text {
    margin: auto;
  }
}
</style>