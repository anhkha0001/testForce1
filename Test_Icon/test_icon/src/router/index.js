import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/components/layout"

export const ro = [
	{
		path: "",
		component: Layout,
		redirect: "index11111",
		children: [
			{
				path: "index11111",
				component: resolve => require(["@/views/index"], resolve),
				name: "index11111",
				meta: {title: "ABC123123123123", icon: "dashboard"}
			}
		]
	}
]

export default new Router({
	routers: ro
})

// export const asyncRouters = [

// ]