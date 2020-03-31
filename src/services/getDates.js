import request from './request'

export default async function getDatas(page = 1, limit = 10) {
	const res = await request("/api/movie", {
		params: {
			page,
			limit
		}
	});
	return res.data;
}