import React from "react"
import { renderRoutes } from "react-router-config"
import routeConfig from './routerConfig'
export default () => {
	return <div>

		<div>
			{renderRoutes(routeConfig())}
		</div>
	</div>
}