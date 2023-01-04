import { FC, lazy, LazyExoticComponent } from "react";

import { Action } from "@/models/Action";


export type LazyComponent =
{
	component: LazyExoticComponent<FC<any>>,
	load: Action,
};

export function lazyLoadPage(name: string): LazyComponent
{
	return { component: lazy(loadComponent), load: loadComponent };


	async function loadComponent(): Promise<{ default: FC<any> }>
    {
		console.log(`Loading route "${name}".`);

		const path = `../views/pages/${name}`;
		const module = await import(path);
		const component = module[name];

		return { default: component };
	}
}