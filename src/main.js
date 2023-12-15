// import Vue from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import MinuteHero from "@/components/minuteHero/MinuteHero";
import {createApp} from 'vue'

const routes = [
  {path: '/minute-hero', component: MinuteHero},
  {path: '/', component: MinuteHero},
  {path: '', component: MinuteHero},

]
//
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const a = createApp(App);
a.use(router);
// a.use(Toast, options);
// a.component('fa-icon', FontAwesomeIcon)
a.mount("#app");


// Vue.config.productionTip = false
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
