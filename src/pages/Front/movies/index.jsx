import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from "@/redux/actions/movies"
function Movies({ movies = [], loadData }) {
	useEffect(() => {
		if (window.requestPath === "/movies") {
			return;
		} else {
			loadData && loadData()
		}
	}, [])
	return (
		<div>
			电影列表
			<ul>
				{movies.map(it => <li key={it._id}>{it.name}</li>)}
			</ul>
		</div>
	)
}

Movies.loadDatas = function (store) {
	console.log(store)
	return store.dispatch(fetchMovies());
}
function mapStateToProps(state) {
	return {
		movies: state.movies
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadData() {
			dispatch(fetchMovies())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)