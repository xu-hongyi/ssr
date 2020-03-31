import { actionTypes } from '../actions/count'


export const count = (state = 0, { type }) => {
	switch (type) {
		case actionTypes.INCREASE:
			return state + 1;
		case actionTypes.DECREASE:
			return state - 1;
		default:
			return state;
	}
}