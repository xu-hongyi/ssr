import React from 'react'
import styles from './index.css';
import { connect } from "react-redux"
import { increaseAction, decreaseAction } from '@/redux/actions/count'
function Home({ number, onIncrease, onDecrease }) {
	return (
		<div>

			<div className={styles.bg}></div>
			<br />
			<button className={styles.btn}
				onClick={onDecrease}>-</button>
			<h1>{number}</h1>
			<button className={styles.btn} onClick={onIncrease}>+</button>
		</div>
	)
}

const mapPropsFronState = (state) => {
	return {
		number: state.count
	}
}
const mapDispatchFromState = (dispatch) => {
	return {
		onIncrease: () => {
			dispatch(increaseAction())
		},
		onDecrease: () => {
			dispatch(decreaseAction())
		}
	}
}

export default connect(mapPropsFronState, mapDispatchFromState)(Home)

