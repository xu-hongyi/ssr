import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./index.css"
import { renderRoutes } from "react-router-config"
export default function index({ route }) {
	return (
		<div>
			<div className={styles.header}>
				<Link to="/admin">首页</Link>
				<Link to="/admin/user">用户</Link>
				<Link to="/admin/sys">系统</Link>
				<Link to="/">前台主页</Link>
			</div>
			<div>
				{renderRoutes(route.routes)}
			</div>
		</div>

	)
}
