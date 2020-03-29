import ReactDOM from "react-dom/server";
import React from "react";
import App from "./App"
import getHTML from './getHTML'
export default (req, res) => {
	const text = {}
	const componentStr = ReactDOM.renderToString(<App location={req.path} context={text} />)
	const html = getHTML(componentStr);
	res.send(html);
}