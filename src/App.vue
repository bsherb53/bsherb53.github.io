<template>
  <div class="app-header">
    <router-link to="/">Home</router-link>
    <router-link to="/two-minute-heroes">2 Minute Heroes</router-link>
  </div>
  <router-view class="page"></router-view>
</template>
<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
#app {
  //color: $color-primary;
  //background-color: $color-secondary;
  display: flex;
  font-size: 24px;
  justify-content: flex-start;
  padding: 12px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  text-align: center;
  margin: auto;
}

.app-header {
  justify-content: space-evenly;
  padding: 12px;
  display: flex;
}
</style>
