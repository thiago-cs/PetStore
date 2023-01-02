import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

import { Response, ResponseStatus } from "@/api/Response";


const initialState: Response<any> =
{
	status: ResponseStatus.Loading,
	data: null,
	prevData: null,
	errorMessage: null,
};


export function useAxios<T>(getItems: ()=>Promise<Response<T>>): Response<T>
{
	const [state, setState] = useState(initialState as Response<T>);

	useEffect(() => { fetchItems(); }, [getItems]);

	return state;


	async function fetchItems(): Promise<void>
	{
		const response = await getItems();

		setState(oldState => ({ ...response, prevData: oldState.data }));
	}
}

function createErrorMessage(response: AxiosResponse<any, any>): string
{
	return `${response.status} ${response.statusText}`;
}