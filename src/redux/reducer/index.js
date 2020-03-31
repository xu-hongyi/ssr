import { combineReducers } from "redux"
import { count } from './count'
import movies from './movies'
export default combineReducers({
	count,
	movies
})