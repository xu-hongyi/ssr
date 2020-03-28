const express = require("express");
const app = express();

app.get("*", (req, res) => {
	const html = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<title>ssr</title>
	</head>
	<body>
		<div>hello ssr</div>
	</body>
	</html>
	`;
	res.send(html);
})

app.listen(2000, () => {
	console.log("服务器已启动")
})