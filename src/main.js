import App from './App.vue'
import {createApp} from "vue";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import TwoMinuteHeroes from "@/views/2MinuteHeroes";
import GKHome from "@/views/GKHome";

const routes = [
    {path: '/', component: GKHome},
    {path: '/two-minute-heroes', component: TwoMinuteHeroes},
]

const app = createApp(App)

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

app.use(router);
app.mount('#app')