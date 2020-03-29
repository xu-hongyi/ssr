import React, { useState } from 'react'
import styles from './index.css';
import imgUrl from "@/assets/images/timg.jpg"
export default function Home() {
	const [number, setNumber] = useState(0)
	return (
		<div>
			number:{number}

			<div className={styles.bg}></div>
			<br />
			<img src={imgUrl} alt="" />
			<button
				className={styles.btn}
				onClick={() => {
					setNumber(number + 1)
				}}>点击</button>
		</div>
	)
}
