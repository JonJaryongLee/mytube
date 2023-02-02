import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import SearchView from "../views/SearchView";
import DetailView from "../views/DetailView";
import LaterView from "../views/LaterView";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/search",
		name: "search",
		component: SearchView,
	},
	{
		path: "/later",
		name: "later",
		component: LaterView,
	},
	{
		path: "/videos/:videoId",
		name: "detail",
		component: DetailView,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
