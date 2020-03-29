import React from "react";
import RouteApp from '../route/RouteApp'
import { StaticRouter } from "react-router-dom"
export default ({ location, context }) => {
	return <StaticRouter location={location} context={context}>
		<RouteApp />
	</StaticRouter>
}