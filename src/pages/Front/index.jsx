import React from 'react'
import Header from '@/components/Header'
import { renderRoutes } from "react-router-config"

export default function index({ route }) {
	return (
		<div>
			<Header />
			{renderRoutes(route.routes)}
		</div>
	)
}
