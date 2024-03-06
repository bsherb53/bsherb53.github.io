import App from './App.vue'
import {createApp} from "vue";
import '@vuepic/vue-datepicker/dist/main.css';

// import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
//
// const routes = [
// //     {path: '/', component: GKHome},
// //     {path: '/two-minute-heroes', component: TwoMinuteHeroes},
// ]

const app = createApp(App)

// const router = createRouter({
//     history: createWebHistory(),
//     routes, // short for `routes: routes`
// })

// app.use(router);
app.mount('#app')