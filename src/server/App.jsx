import React from "react";
import RouteApp from '../route/RouteApp'
import { StaticRouter } from "react-router-dom"
import { Provider } from "react-redux"
export default ({ location, context, store }) => {
	return <Provider store={store}>
		<StaticRouter location={location} context={context}>
			<RouteApp />
		</StaticRouter>
	</Provider>
}