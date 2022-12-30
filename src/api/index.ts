import axios, { CreateAxiosDefaults } from "axios";

import { Product } from "@/models/Product";
import { Offer } from "@/models/Offer";
import { Brand } from "@/models/Brand";
import { settings } from "@/settings";


export const api =
{
	async getProductsAsync()
	{
		const response = await httpClient.get<Product[]>("products");
		return response;
	},

	async getProductAsync(id: string)
	{
		return await axios.get<Product>(`products/${id}`);
	},

	async getTopBrandsAsync()
	{
		return await httpClient.get<Brand[]>("brands");
	},

	async getBrandAsync(id: string)
	{
		return await httpClient.get<Brand>(`brands/${id}`);
	},

	async getOffersAsync()
	{
		return await httpClient.get<Offer[]>("offers");
	},

	async getOfferAsync(id: string)
	{
		return await httpClient.get<Offer>(`offers/${id}`);
	},
}


const config: CreateAxiosDefaults<any> =
{
	baseURL: settings.api.url + settings.api.basePath,
	headers: {},
};

const httpClient = axios.create(config);