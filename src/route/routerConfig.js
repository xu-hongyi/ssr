import NotFound from "../pages/Front/404"
import Movies from "../pages/Front/movies"
import Home from "../pages/Front/Home"
import Front from "@/pages/Front"
import Admin from "@/pages/Admin"
import AdminUser from "@/pages/Admin/User"
import AdminSys from "@/pages/Admin/Sys"
import AdminNotFound from "@/pages/Admin/NotFound"
import AdminHome from "@/pages/Admin/Home"
import { Redirect } from "react-router-dom"
import React from "react"

export default () => {
	const routes = [
		{
			path: "/admin",
			component: Admin,
			routes: [
				{
					path: "/admin",
					exact: true,
					component: AdminHome
				},
				{
					path: "/admin/user",
					exact: true,
					component: AdminUser
				},
				{
					path: "/admin/sys",
					exact: true,
					component: AdminSys
				},
				{
					component: AdminNotFound
				}
			]
		},
		{
			path: "/",
			component: Front,
			routes: [
				{
					path: "/",
					exact: true,
					component: Home
				}, {
					path: "/movies",
					exact: true,
					component: Movies
				}, {
					path: "/temp",
					exact: true,
					component: () => {
						return <Redirect to="/movies" />
					}
				}, {
					component: NotFound
				}
			]
		}

	]
	return routes
}
