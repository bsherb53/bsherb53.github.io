import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vroomsticks from '@/views/Vroomsticks.vue';
import Smashketball from '@/views/Smashketball.vue';

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/vroomsticks',
		name: 'Vroomsticks',
		component: Vroomsticks,
	},
	{
		path: '/smashketball',
		name: 'Smashketball',
		component: Smashketball,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
