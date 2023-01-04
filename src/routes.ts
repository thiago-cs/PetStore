import { matchPath } from "react-router-dom";

import { PageData } from "@/models/PageData";
import { LazyComponent, lazyLoadPage } from "@/utils/lazyLoadPage";
import { settings } from "@/settings"


export const routes: (PageData & LazyComponent)[] = settings.pages.map(page => ({...page, ...lazyLoadPage(page.componentName) }));

export function preloadRoute(path: string): void
{
	if (path === undefined)
		return;

	const pattern = { path, caseSensitive: false };
	const matchingRoute = routes.find(route => matchPath(pattern, route.path) );

	matchingRoute?.load?.();
}