import React from 'react'

export default function NotFound(props) {
	props.staticContext && (props.staticContext.resCode = 404);
	return (
		<div>
			<h1>404 NOT FOUND</h1>
		</div>
	)
}
