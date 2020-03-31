import render from './render'
import express from "express"
import { createProxyMiddleware } from "http-proxy-middleware"
const app = express();



app.use(express.static("./public"))

app.use("/api", createProxyMiddleware({
	target: "http://yuanjin.tech:5005/",
	changeOrigin: true
}))
app.get("*", render)

app.listen(2000, () => {
	console.log("服务器已启动")
})