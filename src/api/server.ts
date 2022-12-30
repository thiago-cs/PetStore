import { createServer, Registry, Request } from "miragejs";
import Schema from "miragejs/orm/schema";
import { AnyFactories, AnyModels } from "miragejs/-types";

import { products, brands, offers } from "./database";
import { settings } from "@/settings";


export function initializeServer()
{
	const server = createServer({ namespace: settings.api.basePath, timing: 1500 });
	server.get("/products", getItems(products));
	server.get("/brands", getItems(brands));
	server.get("/offers", getItems(offers));
	server.get("/products/:id", getItem(products));
	//server.get("/brands/:id",   getItem(brands));
	//server.get("/offers/:id",   getItem(offers));
}

function getItems<T>(items: T[])
{
	return (_schema: Schema<Registry<AnyModels, AnyFactories>>, _request: Request) => items;
}

function getItem<T extends { id: string; }>(items: T[])
{
	return (_schema: Schema<Registry<AnyModels, AnyFactories>>, request: Request) =>
	{
		const { id } = request.params;
		return items.find(item => item.id === id) ?? null;
	};
}