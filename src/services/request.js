import axios from 'axios'

const config = {};
if (typeof window === "undefined") {
	config.baseURL = "http://yuanjin.tech:5005/"
}

export default axios.create(config);