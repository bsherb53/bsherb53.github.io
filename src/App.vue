<template>
  <div class="app-header">
    <div class="app-header-page" @click="changePage('home')">Home</div>
    <div class="app-header-page" @click="changePage('two-minute-heroes')">Two Minute Heroes</div>
    <div class="app-header-page" @click="changePage('gym-meet')">Meet Cute</div>
    <!--    <router-link to="/">Home</router-link>-->
    <!--    <router-link to="/two-minute-heroes">2 Minute Heroes</router-link>-->
  </div>
  <!--  <router-view class="page"></router-view>-->
  <TwoMinuteHeroes v-if="tmh"/>
  <GKHome v-else-if="home"/>
  <GymMeet v-else-if="meet"/>
</template>
<script>

import TwoMinuteHeroes from "@/views/2MinuteHeroes";
import GKHome from "@/views/GKHome";
import GymMeet from "@/views/GymMeet";

export default {
  name: 'App',
  components: {GymMeet, GKHome, TwoMinuteHeroes},
  data() {
    return {
      url: "bsherb53.github.io?page=",
    }
  },
  created() {
  },
  methods: {
    changePage(s) {
      const urlParams = new URLSearchParams(window.location.search);

      urlParams.set('page', s);

      window.location.search = urlParams;

      // console.log(this.$route.params);
      // console.log(s);
      // this.$router.push('?' + s)
      // VueRouter.createRouter()
      // this.$router.push(this.url + s)
    }
  },
  computed: {
    tmh() {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
      let value = params.page; // "some_value"

      // let urlParams = new URLSearchParams(window.location.search);
      // let pageParam = urlParams.get('page')
      return value === "two-minute-heroes"
    },
    meet() {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      let value = params.page;
      return value === "gym-meet"
    },
    home() {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
      let value = params.page; // "some_value"

      // let urlParams = new URLSearchParams(window.location.search);
      // let pageParam = urlParams.get('page')
      return value === "home"
    }
  }
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
  color: $font-color-primary;
}

.app-header {
  justify-content: flex-start;
  padding: 12px;
  display: flex;

  &-page {
    border-bottom: 1px solid $color-primary;
    margin: 4px;
    cursor: pointer;
    padding: 8px;
    font-size: smaller;
    transition: $transition-normal;

    &:hover {
      background-color: $color-primary;
      color: $color-secondary;
      border-radius: $radius-small $radius-small 0 0;
    }
  }
}


.subtitle {
  color: $color-grey;
  font-style: italic;
  font-size: 16px;
}
</style>
