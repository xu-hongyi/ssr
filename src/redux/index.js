import { createStore, applyMiddleware, compose } from "redux"
import reducer from './reducer'
import thunk from "redux-thunk"

function makeStore() {
	let store;
	if (global.document) {
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		store = createStore(reducer, window.getData, composeEnhancers(applyMiddleware(thunk)))
	} else {
		store = createStore(reducer, applyMiddleware(thunk));
	}
	return store;
}

export default makeStore;
