<template>
  <!--  <div class="input-box">-->
  <!--    <div v-if="label" class="input-box-label">{{ label }}:</div>-->
  <input v-model="content" :class="classes" :placeholder="hint" :type="inputType" max="20" min="0"
         v-on:keyup.enter="onEnter"/>
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
  emits: ['changed', 'enter'],
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
      currentValue: this.value,
    };
  },
  watch: {
    content(n, o) {
      this.loading = true;
      this.debouncedFetch(n, o);
      this.currentValue = n;
    },
    value(n) {
      // console.log("changed test")
      this.content = n;
      // this.loading = true;
      // this.debouncedFetch(n, o);
    }
  },
  methods: {
    onEnter() {
      this.$emit('enter', this.currentValue);
      // console.log('clicked enter')
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
  margin: 12px auto;

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
    text-align: center;
    font-size: 24px;
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