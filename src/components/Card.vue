<template>
  <div class="view-card">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "ViewCard"
}
</script>

<style lang="scss" scoped>
.view-card {
  //border: 1px solid $color-black;
  margin: 12px auto;
  border-radius: $radius-small;
  box-shadow: 3px 3px 9px 0px $color-shadow;
  transition: $transition-normal;
  padding: $padding-small;
  background-color: $color-white;
}
</style>