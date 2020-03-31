import React from "react";
import "../assets/css/global.css"
import { BrowserRouter } from "react-router-dom";
import RouteApp from '../route/RouteApp'
import { Provider } from "react-redux"
import makeStore from '../redux'
const store = makeStore()
export default () => {
	return <Provider store={store}>
		<BrowserRouter>
			<RouteApp />
		</BrowserRouter>
	</Provider>
}