import { actionTypes } from '../actions/movies'

export default function (state = [], { type, payload }) {
	switch (type) {
		case actionTypes.SET_DATAS:
			return payload
		default:
			return state;
	}
}