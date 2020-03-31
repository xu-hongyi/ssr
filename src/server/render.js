import ReactDOM from "react-dom/server";
import React from "react";
import App from "./App"
import getHTML from './getHTML'
import loadDatas from "./loadDatas"
import makeStore from '../redux'
export default async (req, res) => {
	const store = makeStore();
	const text = {};
	await loadDatas(req.path, store);
	const componentStr = ReactDOM.renderToString(<App location={req.path} context={text} store={store} />)
	const html = getHTML(componentStr, req, store);
	if (text.action) {
		res.redirect(301, text.url)
	}
	if (text.resCode) {
		res.status(text.resCode)
	}
	res.send(html);
}