import getDatas from "./../../services/getDates"

export const actionTypes = {
	SET_DATAS: "movies/set-datas",
	FET_MOVIES: "movies/fet-movies"
}



export const setDatas = (datas) => {
	return {
		type: actionTypes.SET_DATAS,
		payload: datas
	}
}

export const fetchMovies = (page, limit) => {
	return async (dispatch) => {
		const res = await getDatas(page, limit);
		dispatch(setDatas(res.data))
	}
}