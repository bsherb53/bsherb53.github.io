<template>
  <div class="app-header">
    <div v-for="p in pages" :key="p" :class="classes(p)" @click="changePage(p)">{{ p }}</div>
  </div>
  <div class="app-content">
    <PKMonsters v-if="page === pagePKStats"/>
    <PlayerHome v-else-if="page === pagePlayer"/>
    <GKHome v-else/>
  </div>
  <!--  <router-view class="page"></router-view>-->
</template>
<script>

import PKMonsters from "@/views/PKMonsters.vue";
import PlayerHome from "@/views/PKHome.vue";
import GKHome from "@/views/Home.vue";

export default {
  name: 'App',
  components: {GKHome, PlayerHome, PKMonsters},
  data() {
    return {
      url: "bsherb53.github.io?page=",
      pageTMH: 'two-minute-heroes',
      pageHome: 'Home',
      pagePlayer: 'Players',
      pagePKStats: 'Stat Blocks',
      pages: [],
    }
  },
  created() {
    // Add Pages in order here
    this.pages = [
      this.pageHome,
      this.pagePlayer,
      this.pagePKStats
    ]
    let page = window.localStorage.getItem("page");
    if (page !== null) {
      this.changePage(page);
    }
  },
  methods: {
    changePage(s) {
      if (this.page === s || (!this.page && s === this.pageHome)) {
        return;
      }
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('page', s);
      window.location.search = urlParams;
    },
    classes(p) {
      return {
        'app-header-page': true,
        'app-header-page-selected': this.page === p || (!this.page && p === this.pageHome),
      };
    }
  },
  computed: {

    page() {
      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      return params.page;
    },
    tmh() {
      return this.page === this.tmh;
    },
    meet() {
      return this.page === this.pageGym;
    },
    home() {
      return this.page === this.pageHome;
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
  background-color: $color-off-white;
}

.app-header {
  justify-content: flex-start;
  padding: 12px;
  display: flex;

  &-page {
    //border-bottom: 1px solid $color-primary;
    margin: 4px;
    cursor: pointer;
    padding: 8px;
    font-size: smaller;
    transition: $transition-normal;
    border-radius: $radius-small;
    box-shadow: 3px 3px 9px 0px $color-shadow;
    background-color: $color-white;

    &:hover, &-selected {
      background-color: $color-primary;
      color: $color-secondary;
      border-radius: $radius-medium;
    }
  }
}

.app-content {
  overflow: auto;
}

.subtitle {
  color: $color-grey;
  font-style: italic;
  font-size: 16px;
}
</style>
