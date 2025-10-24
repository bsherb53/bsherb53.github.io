<template>
  <div class="app-header">
    <div :class="classes(pageHome)" @click="changePage(pageHome)">Home</div>
    <!--    <div :class="classes(pageTMH)" @click="changePage(pageTMH)">Two Minute Heroes</div>-->
    <!--    <div :class="classes(pageGym)" @click="changePage(pageGym)">Meet Cute</div>-->
    <div :class="classes(pagePKStats)" @click="changePage(pagePKStats)">Stat Blocks</div>
    <!--    <router-link to="/">Home</router-link>-->
    <!--    <router-link to="/two-minute-heroes">2 Minute Heroes</router-link>-->
  </div>
  <div class="app-content">
    <PKMonsters v-if="page === pagePKStats"/>
    <GKHome v-else/>
  </div>
  <!--  <router-view class="page"></router-view>-->
</template>
<script>

import GKHome from "@/views/GKHome";
import PKMonsters from "@/views/PKMonsters.vue";

export default {
  name: 'App',
  components: {PKMonsters, GKHome},
  data() {
    return {
      url: "bsherb53.github.io?page=",
      pageTMH: 'two-minute-heroes',
      pageHome: 'home',
      pageGym: 'gym',
      pagePKStats: 'pkStat'
    }
  },
  created() {
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

.app-content{
  overflow: auto;
}
.subtitle {
  color: $color-grey;
  font-style: italic;
  font-size: 16px;
}
</style>
