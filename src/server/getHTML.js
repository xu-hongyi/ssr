import getScript from './getScript'
import getLinks from './getLinks'
export default (componentStr, req, store) => {
	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<title>ssr</title>
		${getLinks()}
	</head>
	<body>
		<div id="root">${componentStr}</div>
		<script>window.getData=${JSON.stringify(store.getState())}</script>
		<script>window.requestPath=${JSON.stringify(req.path)}</script>
		${getScript()}
	</body>
	</html>
	`
}