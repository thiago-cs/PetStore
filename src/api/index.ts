import axios, { AxiosResponse, CreateAxiosDefaults } from "axios";

import { Product, validateProducts } from "@/models/Product";
import { Offer, validateOffers } from "@/models/Offer";
import { Brand, validateBrands } from "@/models/Brand";
import { Response, ResponseStatus } from "./Response";
import { settings } from "@/settings";


export const api =
{
	async getProductsAsync()
	{
		const axiosResponse = await httpClient.get<Product[]>("products");
		const response = createApiResponse(axiosResponse);

		if (response.data !== null)
			response.data = validateProducts(response.data);

		return response;
	},

	async getProductAsync(id: string)
	{
		return await axios.get<Product>(`products/${id}`);
	},

	async getTopBrandsAsync()
	{
		const axiosResponse = await httpClient.get<Brand[]>("brands");
		const response = createApiResponse(axiosResponse);

		if (response.data!== null)
			response.data = validateBrands(response.data);

		return response;
	},

	async getBrandAsync(id: string)
	{
		return await httpClient.get<Brand>(`brands/${id}`);
	},

	async getOffersAsync()
	{
		const axiosResponse = await httpClient.get<Offer[]>("offers");
		const response = createApiResponse(axiosResponse);

		if (response.data!== null)
			response.data = validateOffers(response.data);

		return response;
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


function createApiResponse<T>(axiosResponse: AxiosResponse<T>): Response<T>
{
	return axiosResponse.status === 200
		 ? { status: ResponseStatus.Success, data: axiosResponse.data, prevData: null, errorMessage: null }
		 : { status: ResponseStatus.Error, data: null, prevData: null, errorMessage: `${axiosResponse.status} ${axiosResponse.statusText}` };
}