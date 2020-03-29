import React from "react";
import "../assets/css/global.css"
import { BrowserRouter } from "react-router-dom";
import RouteApp from '../route/RouteApp'
export default () => {
	return <BrowserRouter>
		<RouteApp />
	</BrowserRouter>
}