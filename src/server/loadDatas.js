import { matchRoutes } from "react-router-config"
import routeConfig from '../route/routerConfig'
export default function loadDatas(pathname, store) {
	const prom = [];
	const result = matchRoutes(routeConfig(), pathname);
	for (const routes of result) {
		if (routes.route.component.loadDatas) {
			prom.push(Promise.resolve(routes.route.component.loadDatas(store)));
		}
	}
	return Promise.all(prom);
}