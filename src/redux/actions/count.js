export const actionTypes = {
	INCREASE: "count/increase",
	DECREASE: "count/decrease"
}

export const increaseAction = () => {
	return {
		type: actionTypes.INCREASE
	}
}

export const decreaseAction = () => {
	return {
		type: actionTypes.DECREASE
	}
}